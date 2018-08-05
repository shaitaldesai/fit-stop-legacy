var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var seed = require('./seedDB.js');


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Connection to MongoDB instance
* * * * * * * * * * * * * * * * * * * * * * * * * * */


try {
  var config = require('./config.js');
}

catch(e) {
  config = {
    HOST: process.env.DATABASE_HOST,
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE: process.env.DATABASE_NAME,
    PORT: 3306
  }
}


mongoose.connect(`mongodb://${config.USER}:${config.PASSWORD}@${config.HOST}:${config.PORT}/${config.DATABASE}`)


mongoose.connection.once('open', function() {
  console.log('database is connected');
});

mongoose.connection.on('error', function(error) {
  console.log('database connection error: ' + error);
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
  Definition of Schemas
* * * * * * * * * * * * * * * * * * * * * * * * * * */

var exerciseSchema = new Schema({
  name: String,
  description: String,
  type: String,
  picture: String,
  environment: String,
  muscleGroup: String,
  difficulty: String
});

var userSchema = new Schema({
  username: String,
  password: String,
  preferences: {},
  workoutHistory: []
});


/* * * * * * * * * * * * * * * * * * * * * * * * * * *
   Model Creation based on Schemas
* * * * * * * * * * * * * * * * * * * * * * * * * * */

var Exercise = mongoose.model('Exercise', exerciseSchema);
var User = mongoose.model('User', userSchema);

// Inserting data
Exercise.insertMany(seed, (err) => {
  console.log(err);
})



module.exports.exerciseModel = Exercise;
module.exports.userModel = User;
module.exports.mongoose = mongoose;

