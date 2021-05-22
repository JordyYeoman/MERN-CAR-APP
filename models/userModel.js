// Build out what the users should look like in the database
// Schema
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    passwordHash: {type: String, required: true}
})

// Mongoose will create a collection of 'Users' which 
// hold single 'user' documents
const User = mongoose.model('user', userSchema);

module.exports = User;