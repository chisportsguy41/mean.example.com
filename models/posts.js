var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var slug = require('slug');

//Create a schema
var Posts = new Schema({
  title: {
    type: String,
    required: [true, 'A title is required']
  },
  slug: {
    type: String,
    required: [true, 'A slug is required'],
    unique: true
  },
  description: String,
  keywords: String,
  body: String,
  userID: String,
  published: {
    type: Date
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date
  },
  offset: {
    type: Number
  }
});

//Auto set the slug prior to validation
Posts.pre('validate', function(next){

  //Do not overwrite the slug if it already exists
  if(this.slug==undefined){
    if(this.title){
      this.slug = slug(this.title).toLowerCase();
    }
  }

  //If no published date has been provided use the current date
  if(this.published==undefined){
    this.published = new Date().toISOString();
  } else {
    this.published = new Date(this.published).toISOString();
  }

  this.modified = new Date().toISOString();

  next();
});

module.exports = mongoose.model('Posts', Posts);
