const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 16,
        whitespace: false
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 16,
        whitespace: false
    }
}, {
    timestamps: true,
});

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    user: userSchema
}, {
    timestamps: true,
});

const Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;

const User = mongoose.model('User', userSchema);
module.exports = User;