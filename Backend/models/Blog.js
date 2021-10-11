const mongoose = require("mongoose")

const Blog = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Blog", Blog)