export const getComments = () => fetch("http://localhost:5550/comments").then(res => res.json())

export const addComment = (comment) => fetch("http://localhost:5550/comments/add-comment", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
})