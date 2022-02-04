var mongoose = require('mongoose');

var MoviesSchema = mongoose.Schema({
    name:String,
    rating:Number,
    language:String
})

module.exports = mongoose.model("movies",MoviesSchema)