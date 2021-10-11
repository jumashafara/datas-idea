
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';
import { Route, Switch } from 'react-router';
import BlogDetails from './components/BlogDetails';
import  AddBlog  from './components/AddBlog';
import { getBlogs } from './Apis/blogs_api'
import {getComments} from './Apis/comments_api'
import { useEffect } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Login from './components/Login';


function App() {

 const [blogs, setBlogs] = useState([])
 const [comments, setComments] = useState([])

 useEffect(() => {
  const fetchItems = async () => {
      const blogs = await getBlogs()
      setBlogs(blogs)
  }
  fetchItems()
}, [blogs])

useEffect(() => {
  const fetchItems = async () => {
      const comments = await getComments()
      setComments(comments)
  }
  fetchItems()
}, [blogs])

  return (
    <div className="parent">
      <Header/>
      <div className="content children">
        <Switch>
          <Route exact path = "/">
          <Home blogs = {blogs}/>
          </Route>
          <Route exact path = "/blogs/:_id" >
          <BlogDetails blogs = {blogs} comments = {comments}/>
          </Route>
          <Route exact path = "/add-blog">
          <AddBlog />
          </Route>
          <Route exact path = "/about">
          <About />
          </Route>
          <Route exact path = "/contact">
          <Contact />
          </Route>
          <Route exact path = "/login">
          <Login />
          </Route>
        </Switch>
      </div>
      <div className="footer">
      <Footer/>
      </div> 
    </div>
  );
}

export default App;
