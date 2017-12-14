var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PetSchema = new mongoose.Schema({
    name: String,
    species: String,
    likes: Number
})

mongoose.model('Pet', PetSchema);
