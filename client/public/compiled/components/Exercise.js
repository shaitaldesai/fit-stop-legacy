"use strict";

var Exercise = function Exercise(props) {
  return React.createElement(
    "div",
    { className: "exercise" },
    React.createElement(
      "div",
      { className: "exerciseDescription" },
      React.createElement("img", { className: "exerciseImage", src: props.exercise.picture }),
      React.createElement(
        "p",
        null,
        React.createElement(
          "span",
          { className: "exerciseName" },
          props.exercise.name
        )
      ),
      props.exercise.description
    )
  );
};

window.Exercise = Exercise;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0V4ZXJjaXNlLmpzeCJdLCJuYW1lcyI6WyJFeGVyY2lzZSIsInByb3BzIiwiZXhlcmNpc2UiLCJwaWN0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHFCQUFmO0FBQ0UsbUNBQUssV0FBVSxlQUFmLEVBQStCLEtBQUtBLE1BQU1DLFFBQU4sQ0FBZUMsT0FBbkQsR0FERjtBQUVFO0FBQUE7QUFBQTtBQUFHO0FBQUE7QUFBQSxZQUFNLFdBQVUsY0FBaEI7QUFBZ0NGLGdCQUFNQyxRQUFOLENBQWVFO0FBQS9DO0FBQUgsT0FGRjtBQUdHSCxZQUFNQyxRQUFOLENBQWVHO0FBSGxCO0FBREYsR0FEYTtBQUFBLENBQWY7O0FBV0FDLE9BQU9OLFFBQVAsR0FBa0JBLFFBQWxCIiwiZmlsZSI6IkV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEV4ZXJjaXNlID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlRGVzY3JpcHRpb25cIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZXhlcmNpc2VJbWFnZVwiIHNyYz17cHJvcHMuZXhlcmNpc2UucGljdHVyZX0gLz5cbiAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT1cImV4ZXJjaXNlTmFtZVwiPntwcm9wcy5leGVyY2lzZS5uYW1lfTwvc3Bhbj48L3A+XG4gICAgICB7cHJvcHMuZXhlcmNpc2UuZGVzY3JpcHRpb259XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuRXhlcmNpc2UgPSBFeGVyY2lzZTtcbiJdfQ==