const { Schema, model } = require('mongoose');

const showsSchema = new Schema({
// fill once data points are received
// Show Title, Dates of Performance, Directors, Producers, Cast (first name, last name)
    title: {
        type: String,
        required: true,
        unique: false,
        minlength: 1,
        maxlength: 100,
        trim: true,
    },
    datesOfPerformance: {
        type: Date,
        required: false,
        trim: true,
    },
    production: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    },
    cast: {
        type: String,
        required: false,
        unique: false,
        trim: true,
    }

});

const Shows = model('shows', showsSchema);

module.exports = Shows