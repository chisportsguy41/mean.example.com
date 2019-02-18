var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

//Create a schema
var Games = new Schema({
  gameType: {
    type: String,
    required: [true, 'Please specify the game you would like to play']
  },
  name: {
    type: String,
    required: [true, 'A name is required'],
    unique: true
  },
  shoes: Number,
  players: Number,
  type: String,
  protected: Boolean,
  password: String,
  hasStarted: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date
  }
});

//Auto set the slug prior to validation
Games.pre('save', function(next){
  this.modified = new Date().toISOString();
  next();
});

Games.plugin(uniqueValidator);

module.exports = mongoose.model('Games', Games);
