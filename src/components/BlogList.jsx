import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
    const length = blogs.length
    return (
        <div>
            <h1 className = "font-weight-bold mt-3 bg-warning p-2 m-0 pl-3">All blogs</h1>
            {
               length !== 0 ? blogs.map((blog)=>(
                    <div className="blog-preview blog shadow mt-5 p-3 rounded-lg" key = {blog._id}>
                        <Link to = {`/blogs/${blog._id}`} className = "text-dark">
                        <h2 className = "blog-title font-weight-bold">{blog.title}</h2>                       
                        <p>{blog.body.slice(0, 100)}... <span className="text-warning"> read more</span></p>
                        <p>written by <span className="font-weight-bold"> {blog.author}</span></p>
                        </Link>
                    </div>
                )) : <h2>No blogs found</h2>
            }
        </div>
    )
}

export default BlogList

