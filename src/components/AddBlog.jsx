import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router';
import { addBlog } from '../Apis/blogs_api';

const AddBlog = () => {
const history = useHistory()
    
const {register, handleSubmit} = useForm()

const onSubmit = (data) => {
    addBlog(data)
    history.push("/")
   }

   
    return (
        <div className = "container">
            <form onSubmit = {handleSubmit(onSubmit)}>
                <label htmlFor="">Title </label>
                <input type="text" className = "form-control border-none shadow-dark input " {...register("title")}/>
                <label htmlFor="">Body </label>
                <textarea name="" id="" cols="" rows="5" className = "form-control input" {...register("body")}></textarea>
                <label htmlFor="">Author </label>
                <input type="text" name = "title" className = "input form-control border-none shadow-dark "{...register("author")}/>
                <input type="submit" value="Add blog" className = "form-control btn btn-success mt-4"/>
            </form>
        </div>
    )
}

export default AddBlog
