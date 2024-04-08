const mongoose = require('mongoose');
const uri = 'mongodb+srv://lucas:Lucas021199@cluster0.m5vtdgq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

module.exports = mongoose.model('User', userSchema);

