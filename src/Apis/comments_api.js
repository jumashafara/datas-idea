export const getComments = () => fetch("https://datas-idea.herokuapp.com/comments").then(res => res.json())

export const addComment = (comment) => fetch("https://datas-idea.herokuapp.com/comments/add-comment", {
    method: "POST",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(comment)
})