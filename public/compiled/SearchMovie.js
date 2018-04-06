"use strict";

var SearchMovie = function SearchMovie(props) {
  console.log(props);
  return React.createElement(
    "div",
    null,
    React.createElement("input", { className: "search", onClick: props.handleClick }),
    React.createElement(
      "button",
      null,
      "Go!"
    )
  );
};