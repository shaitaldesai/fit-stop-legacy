"use strict";

var Countdown = function Countdown(props) {
  return React.createElement(
    "div",
    { className: "countdown" },
    React.createElement(
      "h1",
      null,
      "Get Ready!"
    ),
    React.createElement(
      "div",
      { className: "countdownCircle" },
      React.createElement(
        "span",
        { className: "countdownNumber" },
        props.countdown
      )
    )
  );
};

window.Countdown = Countdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvdW50ZG93bi5qc3giXSwibmFtZXMiOlsiQ291bnRkb3duIiwicHJvcHMiLCJjb3VudGRvd24iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWSxTQUFaQSxTQUFZLENBQUNDLEtBQUQ7QUFBQSxTQUNkO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFLLFdBQVUsaUJBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLGlCQUFoQjtBQUFtQ0EsY0FBTUM7QUFBekM7QUFERjtBQUZGLEdBRGM7QUFBQSxDQUFoQjs7QUFVQUMsT0FBT0gsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiQ291bnRkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIENvdW50ZG93biA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93blwiPlxuICAgIDxoMT5HZXQgUmVhZHkhPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93bkNpcmNsZVwiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY291bnRkb3duTnVtYmVyXCI+e3Byb3BzLmNvdW50ZG93bn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuQ291bnRkb3duID0gQ291bnRkb3duO1xuIl19