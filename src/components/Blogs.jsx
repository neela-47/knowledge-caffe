
import { useEffect, useState } from "react";
import Blog from "./Blog";
import propTypes from 'prop-types'

const Blogs = ({handleBookMark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() =>{
        fetch('/Blog/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

   return (
        <div className="w-2/3">
            <h1 className="text-3xl ml-10 mb-5"> Blogs : {blogs.length} </h1>
            {
                blogs.map((blog) => <Blog key={blog.id}
                 blog={blog}
                 handleBookMark={handleBookMark}
                 handleReadingTime={handleReadingTime}
                 ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookMark: propTypes.func,
    handleReadingTime: propTypes.func
}
export default Blogs;