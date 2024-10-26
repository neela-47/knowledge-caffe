import propTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title}= bookmark
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: propTypes.object
}
export default Bookmark;