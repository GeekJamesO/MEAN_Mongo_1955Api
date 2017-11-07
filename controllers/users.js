var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function() {
    return {

        index: function(req, res) {
            User.find({}, function(err, users) {
                if (err) {
                    console.log(err);
                    console.log("error in index");
                } else {
                    return res.json(users);
                }
            })
        },
        create: function(req, res) {
            User.create({ name: req.params.name }, function(err, users) {
                if (err) {
                    console.log(err);
                    console.log("error in index");
                } else {
                    res.redirect('/');
                }
            })
        },
        show: function(req, res) {
            User.findOne({ name: req.params.name }, function(err, users) {
                if (err) {
                    console.log(err);
                    console.log("error in index");
                } else {
                    return res.json(users);
                }
            })
        },
        destroy: function(req, res) {
            User.remove({ name: req.params.name }, function(err, users) {
                if (err) {
                    console.log(err);
                    console.log("error in index");
                } else {
                    res.redirect("/");
                }
            })
        }

    }
})()