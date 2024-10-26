import propTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({blog,  handleBookMark, handleReadingTime}) => {
    const {title, cover,author_img, author, reading_time, posted_date, hashtags} = blog;
    return (
        <div className="mb-20 ml-10 space-y-3">
            <img className="rounded-2xl w-full mb-8" src={blog.cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-4">
                   <img className="w-10 h-10 rounded-full" src={blog.author_img} alt="" />
                    <div>
                    <h4>{blog.author}</h4>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div >
                    <span className="mr-2">{reading_time} min read</span>
                    <button onClick={() => handleBookMark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h1>Title : {blog.title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) =><span key={idx}> <a href=" "> #{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleReadingTime(reading_time)}
                className='text-purple-600 underline'>Mark As read</button>
        </div>
    );
};
Blog.propTypes={
    blog: propTypes.object.isRequired,
    handleBookMark: propTypes.func,
    handleReadingTime: propTypes.func
}

export default Blog;