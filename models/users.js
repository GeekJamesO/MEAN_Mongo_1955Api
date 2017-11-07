var mongoose = require("mongoose");
var Schema = mongoose.Schema;
console.log(Schema);

var UsersSchema = new Schema({
    name: String
})
console.log(UsersSchema);

mongoose.model("User", UsersSchema); //Mapping model to schema.