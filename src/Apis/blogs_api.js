export const getBlogs = () => fetch("http://localhost:5550/blogs").then(res => res.json())

export const addBlog = (blog) => fetch("http://localhost:5550/blogs/add-blog", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
})

export const getBlog = (id) => fetch(`http://localhost:5550/blogs/${id}`).then(res => res.json())