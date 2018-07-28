"use strict";

var Dashboard = function Dashboard(props) {
  return React.createElement(
    "div",
    { className: "dashboard" },
    React.createElement(
      "h1",
      null,
      "Start Workout"
    ),
    React.createElement(
      "div",
      { className: "startButton" },
      React.createElement("img", { onClick: props.goToCountdown, src: "public/images/pizzablue.png", alt: "Start" })
    ),
    React.createElement(History, { workoutHistory: props.workoutHistory, workoutDate: props.workoutDate, workoutLength: props.workoutLength, loggedIn: props.loggedIn })
  );
};

window.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Rhc2hib2FyZC5qc3giXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwicHJvcHMiLCJnb1RvQ291bnRkb3duIiwid29ya291dEhpc3RvcnkiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRMZW5ndGgiLCJsb2dnZWRJbiIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxhQUFmO0FBQ0UsbUNBQUssU0FBVUEsTUFBTUMsYUFBckIsRUFBb0MsS0FBSSw2QkFBeEMsRUFBc0UsS0FBSSxPQUExRTtBQURGLEtBRkY7QUFLRSx3QkFBQyxPQUFELElBQVMsZ0JBQWdCRCxNQUFNRSxjQUEvQixFQUErQyxhQUFhRixNQUFNRyxXQUFsRSxFQUErRSxlQUFlSCxNQUFNSSxhQUFwRyxFQUFtSCxVQUFVSixNQUFNSyxRQUFuSTtBQUxGLEdBRGM7QUFBQSxDQUFoQjs7QUFXQUMsT0FBT1AsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiRGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERhc2hib2FyZCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZFwiPlxuICAgIDxoMT5TdGFydCBXb3Jrb3V0PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXJ0QnV0dG9uXCI+XG4gICAgICA8aW1nIG9uQ2xpY2s9IHtwcm9wcy5nb1RvQ291bnRkb3dufSBzcmM9XCJwdWJsaWMvaW1hZ2VzL3BpenphYmx1ZS5wbmdcIiBhbHQ9XCJTdGFydFwiLz5cbiAgICA8L2Rpdj5cbiAgICA8SGlzdG9yeSB3b3Jrb3V0SGlzdG9yeT17cHJvcHMud29ya291dEhpc3Rvcnl9IHdvcmtvdXREYXRlPXtwcm9wcy53b3Jrb3V0RGF0ZX0gd29ya291dExlbmd0aD17cHJvcHMud29ya291dExlbmd0aH0gbG9nZ2VkSW49e3Byb3BzLmxvZ2dlZElufS8+XG4gIDwvZGl2PlxuKTtcblxuXG53aW5kb3cuRGFzaGJvYXJkID0gRGFzaGJvYXJkO1xuIl19