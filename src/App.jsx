
import './App.css'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'

function App() {
  

  return (
    <>
     <Header></Header>

     <main className='flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
     </main>
      
    </>
  )
}

export default App
