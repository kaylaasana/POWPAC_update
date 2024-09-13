const { Schema, model } = require('mongoose');

const showsSchema = new Schema({
// Show Title, Dates of Performance, Directors, Producers, Cast
    title: {
        type: String,
        required: true,
        unique: false,
        minlength: 1,
        maxlength: 100,
        trim: true,
    },
    datesOfPerformance: {
        type: Object,
        required: false,
        trim: true,
    },
    production: {
        type: Array,
        required: false,
        unique: false,
        trim: true,
    },
    cast: {
        type: Array,
        required: false,
        unique: false,
        trim: true,
    }

});

const Shows = model('shows', showsSchema);

module.exports = Shows;