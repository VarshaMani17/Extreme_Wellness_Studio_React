const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },  // Changed password to String
    // gender: { type: String },
    // dateOfBirth: { type: Date },
    // age: { type: Number },
    // address: { type: String },
    // district: { type: String },
    // state: { type: String }
});

module.exports = mongoose.model('User', UserSchema);