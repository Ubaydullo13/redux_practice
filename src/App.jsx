import './App.css'
import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./assets/data.json"
import { useDispatch } from 'react-redux'

function App() {
  const [books, setBooks] = useState([]);
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    setBooks(data);
    setLocal(getData())
  }, [])

  function handleFavorites(book, exist) {
    let copied = JSON.parse(JSON.stringify(local));
    if(exist) {
      copied = copied.filter((el) => {
        return el.imageLink !== book.imageLink && el.title !== book.title
      } )
      dispatch({type: "REMOVE"})
    } else {
      copied.push(book)
      dispatch({type: "ADD"})
    }
    setLocal(copied)
    localStorage.setItem('books', JSON.stringify(copied))
  }

  function getData(){
    let data = [];
    if(localStorage.getItem('books')){
      data = JSON.parse(localStorage.getItem('books'));
    }
    return data;
  }

  return (
    <div className="wrapper">
      <Navbar/>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
     {
      books.length > 0 && books.map((book, i) => {
        let isExist = false;
        if(local.length) {
          isExist = local.some(el => {
            return el.imageLink == book.imageLink
          })
        }
        return <Card exist={isExist} click={handleFavorites} key={i} book={book}></Card>
      })
     }
       
      </div>
    </div>
  )
}

export default App
