export const getBlogs = () => fetch("https://datas-idea.herokuapp.com/blogs").then(res => res.json())

export const addBlog = (blog) => fetch("https://datas-idea.herokuapp.com/blogs/add-blog", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
})

export const getBlog = (id) => fetch(`https://datas-idea.herokuapp.com/blogs/${id}`).then(res => res.json())