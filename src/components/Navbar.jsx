import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
const bookmarks = useSelector(state => state.bookmarks.bookmarks)
const dispatch = useDispatch()
function getData(){
  let data = [];
  if(localStorage.getItem('books')){
    data = JSON.parse(localStorage.getItem('books'));
  }
  return data;
}

  useEffect(() => {
    let count = getData().length;
    dispatch({
      type: 'ASSIGN',
      payload: count
    })
  }, [])
  return (
    <div className="navbar bg-base-100 py-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn text-xl">
        Favorites
        <span className="badge badge-success text-xl p-3">{bookmarks}</span>
    </button>
    
  </div>
</div>
  )
}

export default Navbar