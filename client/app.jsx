class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [{title: "The Fugitive"}, {title: "Clear and Present Danger"}, {title: "Air Force One"}, {title: "Six Days, Seven Nights"}]
    }

    this.onSearchClick = this.onSeachClick.bind(this);
  }

  onSeachClick(query) {
    
    console.log('sdfd')
  }

  render() {
    return <MovieList movies={this.state.movies} onSeachClick={this.onSearchClick}/>;
  }
}