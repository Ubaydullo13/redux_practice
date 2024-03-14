

function Card(props) {
    const {title, author, language, country, year, imageLink} = props.book;
  return (
    <div className="card bg-base-100 shadow-xl">
  <div className="card-body">
    <div className="flex justify-between">
    <h2 className="card-title">{title}</h2>
    <i className="fa-regular fa-star"></i>
    </div>
    
    <p className="font-medium">{author}</p>
    <p className="font-normal">{language}</p>
    <p className="font-normal">{country}</p>
    <p className="font-medium">{year}</p>
  </div>
</div>
  )
}

export default Card