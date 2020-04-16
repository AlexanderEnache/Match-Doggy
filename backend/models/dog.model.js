const mongoose = require('mongoose');
let User = require('./model');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    user: [userSchema]
}, {
    timestamps: true,
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;