import { useForm } from 'react-hook-form'
import { useState } from 'react'
import AddBlog from './AddBlog'

const Login = () => {
    const {register, handleSubmit} = useForm()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    let [flag, setFlag] = useState()

    const onSubmit = (e) => { 
    e.preventDefault()
    flag = false
    email === "datasideaofficial@gmail.com" && password === "chappie" ? setFlag(true) : alert("wrong id")
}
    return (
        <div>
            
            {flag ? <AddBlog/> : 
            <div>
            <h2 className = "text-center bg-warning font-weight bold">Login</h2>
            <form onSubmit = {onSubmit} className = "p-5">
            <label htmlFor="">Email</label>
            <input type ="email" className="form-control clear1" onChange = {e => setEmail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="text" className="form-control clear2" onChange = {e => setPassword(e.target.value)}/>
            <input type="submit" value="Submit comment" className = "mt-3 form-control btn btn-success"/>
            </form> 
            </div>
           
             }
        </div>
    )
}

export default Login
