const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')

router.get('/', (req,res) => Blog.find((err, blogs) => err ? console.log(err) : res.json(blogs)))

router.post("/add-blog", (req, res) => {
    const blog = new Blog(req.body)
    blog.save().then((blog) => res.json(blog)).catch((err) => res.status(500).send(err.message))
})

router.get('/:id', (req,res) => {
    const id = req.params.id
    Blog.findById(id, (err, blog) => res.json(blog))
})

module.exports = router