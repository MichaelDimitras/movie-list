"use strict";

var MovieListItem = function MovieListItem(props) {
  return React.createElement(
    "div",
    { className: "listItem" },
    props.title
  );
};