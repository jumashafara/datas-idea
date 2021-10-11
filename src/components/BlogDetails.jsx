import { useParams } from 'react-router'
import { getBlog } from '../Apis/blogs_api'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { addComment } from '../Apis/comments_api'

const BlogDetails = ({blogs, comments}) => {
     const id = useParams()._id
     const [blog, setBlog] = useState()

useEffect(() => {
    const fetchBlog = async () => {
    const blog = await getBlog(id)
        setBlog(blog)
    }
    fetchBlog()
}, [])

const {register, handleSubmit} = useForm()

const onSubmit = (data) => {
    addComment(data)
    console.log("submitted")
    document.querySelector(".alert").style.display = "block"
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none"
        document.querySelector(".clear1").value = ""
    document.querySelector(".clear2").value = ""
    }, 1000)
   }

    return (
        <div>
            <h2 className = "bg-warning p-2">Blog details</h2>
        <div className = "container mt-3">{blog ? <div>
            <h2 className = "font-weight-bold">{blog.title}</h2>
            <h3>Written by <span className = "font-weight-bold">{blog.author}</span></h3>
            <hr className = "bg-warning"/>
            <p className = "mt-3">{blog.body}</p>
            </div> : <h3>fetching blog ...</h3>} 

            <form onSubmit = {handleSubmit(onSubmit)} className = "p-5">
            <h2 className="font-weight-bold text-center">Send a reply</h2>    
            <label htmlFor="">Email</label>
            <input type ="email" className="form-control clear1" {...register("email")}/>
            <label htmlFor="">Reply</label>
            <input type="text" className="form-control clear2" {...register("body")}/>
            <input type="text" className = "alert alert-success form-control mt-3" value = "Your reply has been submitted, thaks!" />
            <input type="submit" value="Submit comment" className = "mt-3 form-control btn btn-warning"/>
            </form>  
        </div>
        </div>
    )
}


export default BlogDetails
