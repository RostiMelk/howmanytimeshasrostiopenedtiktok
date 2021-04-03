const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const countSchema = new Schema({
    total: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    }
});

const Count = mongoose.model('Count', countSchema);

module.exports = Count;