import propTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title}= bookmark
    console.log(bookmark)
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
};
Bookmark.propTypes={
    bookmark: propTypes.object
}
export default Bookmark;