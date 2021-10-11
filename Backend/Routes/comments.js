const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.get('/', (req, res) => Comment.find((err, comments) => err ? console.log(err) : res.json(comments)))

router.post("/add-comment", (req, res) => {
    const comment = new Comment(req.body)
    comment.save().then((comment) => res.json(comment)).catch((err) => res.status(500).send(err.message))
})

module.exports = router