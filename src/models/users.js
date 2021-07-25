const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    name: {
        type : String,
        }
}, { autoCreate: true })

module.exports = mongoose.model('users', UsersSchema)