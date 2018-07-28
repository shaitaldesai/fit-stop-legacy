"use strict";

var PastWorkout = function PastWorkout(props) {
  return React.createElement(
    "div",
    { className: "pastWorkout" },
    React.createElement(
      "p",
      null,
      " ",
      React.createElement(
        "span",
        { className: "dateAndTime" },
        props.date
      ),
      " | ",
      React.createElement(
        "span",
        null,
        props.lengthOfWorkout,
        " minutes"
      ),
      " "
    )
  );
};

window.PastWorkout = PastWorkout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Bhc3RXb3Jrb3V0LmpzeCJdLCJuYW1lcyI6WyJQYXN0V29ya291dCIsInByb3BzIiwiZGF0ZSIsImxlbmd0aE9mV29ya291dCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLFVBQU0sV0FBVSxhQUFoQjtBQUErQkEsY0FBTUM7QUFBckMsT0FBSjtBQUFBO0FBQXdEO0FBQUE7QUFBQTtBQUFPRCxjQUFNRSxlQUFiO0FBQUE7QUFBQSxPQUF4RDtBQUFBO0FBQUE7QUFERixHQURnQjtBQUFBLENBQWxCOztBQU9BQyxPQUFPSixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJQYXN0V29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQYXN0V29ya291dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhc3RXb3Jrb3V0XCI+XG4gICAgPHA+IDxzcGFuIGNsYXNzTmFtZT1cImRhdGVBbmRUaW1lXCI+e3Byb3BzLmRhdGV9PC9zcGFuPiB8IDxzcGFuPntwcm9wcy5sZW5ndGhPZldvcmtvdXR9IG1pbnV0ZXM8L3NwYW4+IDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5QYXN0V29ya291dCA9IFBhc3RXb3Jrb3V0O1xuXG4iXX0=