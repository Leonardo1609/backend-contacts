const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    contactType:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model( 'Contacts', ContactSchema );