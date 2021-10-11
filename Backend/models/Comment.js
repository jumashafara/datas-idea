const mongoose = require("mongoose")

const Comment = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Comment", Comment)