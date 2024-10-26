
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookMarks] = useState()

  const handleBookMark = blog =>{
  const newBookMarks = [...bookmarks, blog];
  setBookMarks(newBookMarks);
  console.log(bookmarks)
  }

  return (
    <>
     <Header></Header>

     <main className='flex gap-5 max-w-7xl mx-auto '>
      <Blogs handleBookMark={handleBookMark}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
      
    </>
  )
}

export default App
