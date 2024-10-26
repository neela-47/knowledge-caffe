import propTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
   
    return (
        <div>
            <div className="bg-slate-300 p-5 rounded-2xl mb-5">
                <h3>Reading time : {readingTime} </h3>
            </div>
            <h1 className="text-3xl w-1/3 ">Bookmarks:{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} 
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: propTypes.array,
    readingTime: propTypes.number
}
export default Bookmarks;