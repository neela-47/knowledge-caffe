import propTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
    
    return (
        <div>
            <h1 className="text-3xl w-1/3">Bookmarks: {bookmarks}</h1>
            
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks: propTypes.array
}
export default Bookmarks;