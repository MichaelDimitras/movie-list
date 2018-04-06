"use strict";

var MovieList = function MovieList(props) {
  console.log(props);
  return React.createElement(
    "div",
    { className: "listArea" },
    React.createElement(SearchMovie, { handleClick: props.onSearchClick }),
    React.createElement(
      "div",
      { className: "listHeader listItem" },
      "MovieList"
    ),
    React.createElement(
      "div",
      null,
      props.movies.map(function (item, index) {
        return React.createElement(MovieListItem, { key: index, title: item.title });
      })
    )
  );
};