require('dotenv').config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://shafara:droidchappie@cluster0.arydp.mongodb.net/datas-idea",{ useNewUrlParser: true})

mongoose.connection.once('open', () => console.log("Mongodb connection established successfully"))
const app = express()

const port = process.env.PORT || 5550 

app.use(cors())
app.use(express.json())

const blogsRouter = require('./Routes/blogs')
app.use('/blogs', blogsRouter)

const commentsRouter = require('./Routes/comments')
app.use('/comments', commentsRouter)

app.listen(port, ()=> console.log("Server is running succesfully"))