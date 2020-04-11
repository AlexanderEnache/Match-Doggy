const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    // user: {
    //     type: Object,
    //     required: true,
    //     trim: true,
    //     minlength: 3
    // }
}, {
    timestamps: true,
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;