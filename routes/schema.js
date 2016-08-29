// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 

// create a schema
var userSchema = new Schema({
  firstName: String,
  lastName: String,  
  created_at: Date,
  updated_at: Date
});

// on every save, add the date
userSchema.pre('save', function(next) {
  var user=this;
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at){ 
    this.created_at = currentDate;
  }
  
  if(this.userId!==null){
	  next();
  }
  
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;