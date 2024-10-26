
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleBookMark = blog =>{
  const newBookMarks = [...bookmarks, blog];
  setBookMarks(newBookMarks);
  console.log(bookmarks)
  }

  const handleReadingTime = (id, time )=>{
    console.log('readed');
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    const remainingBookMark = bookmarks.filter(bookmark => bookmark.id !== id)
  console.log('booked');
  setBookMarks(remainingBookMark)
  }

  

  return (
    <>
     <Header></Header>

     <main className='flex gap-5 max-w-7xl mx-auto '>
      <Blogs handleBookMark={handleBookMark} handleReadingTime={handleReadingTime}>
     </Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </main>
      
    </>
  )
}

export default App
