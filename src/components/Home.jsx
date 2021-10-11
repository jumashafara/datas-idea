import BlogList from './BlogList'
import home from '../project_images/home.jpg'

const Home = ({ blogs }) => {
    
    return (
        <div>
            <div className = "position-relative">
            <img src={home} alt='' className='img-fluid' /> 
            <h1 className="p-2 text-center position-absolute welcome font-weight-bolder font-weight-larger">Welcome home!</h1>
            </div>
            <div className = "container">
            <BlogList blogs = {blogs}/>
        </div>
        </div>
        
    )
}

export default Home
