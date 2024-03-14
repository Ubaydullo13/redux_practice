import './App.css'
import { useEffect, useState } from 'react'
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./assets/data.json"

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(data);
  }, [])

  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-8 mt-5">
     {
      books.length > 0 && books.map((book, i) => {
        return <Card key={i} book={book}></Card>
      })
     }
       
      </div>
    </div>
  )
}

export default App
