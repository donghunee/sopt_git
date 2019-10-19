var mongoose = require('mongoose')
var Schema = mongoose.Schema
// var imageSchema = new Schema({
//     imageDate: { type: Date, default: Date.now }
// })

var userSchema = new Schema({
    gitName: String,
    sopt: String,
    socore: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    },
    color:String,
},{ versionKey: '_somethingElse' })


module.exports = mongoose.model('user',userSchema)