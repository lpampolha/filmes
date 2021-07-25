const mongoose = require('mongoose')

const FilmsSchema = new mongoose.Schema({
    name: {
        type : String,
        }
}, { autoCreate: true })

module.exports = mongoose.model('films', FilmsSchema)