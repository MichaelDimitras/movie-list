var SearchMovie = (props) => {
console.log(props)
  return (
    <div>
        <input className="search" onClick={props.handleClick}></input>
        <button>Go!</button>
    </div>
  )
}