

function Navbar() {
  return (
    <div className="navbar bg-base-100 py-4">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <button className="btn text-xl">
        Favorites
        <span className="badge badge-success text-xl p-3">5</span>
    </button>
    
  </div>
</div>
  )
}

export default Navbar