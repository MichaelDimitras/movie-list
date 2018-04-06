var MovieList = (props) => {
  console.log(props);
  return(
    <div className="listArea">
      <SearchMovie handleClick={props.onSearchClick} />
      <div className="listHeader listItem">MovieList</div>
      <div>
        {
          props.movies.map((item, index) => <MovieListItem key={index} title={item.title}/>)
        }
      </div>
    </div>
  )
}

