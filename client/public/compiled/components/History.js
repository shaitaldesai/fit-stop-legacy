"use strict";

var History = function History(props) {
  return React.createElement(
    "div",
    { className: "history" },
    React.createElement(
      "h1",
      null,
      " History "
    ),
    props.loggedIn && props.workoutHistory.map(function (indivWorkout) {
      return React.createElement(PastWorkout, { date: indivWorkout.date, lengthOfWorkout: indivWorkout.lengthOfWorkout, key: indivWorkout._id });
    }),
    !props.loggedIn && React.createElement(
      "span",
      { className: "historyNotLoggedIn" },
      "You are not currently logged in. Please Log In or Sign Up to view Workout History."
    )
  );
};

window.History = History;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hpc3RvcnkuanN4Il0sIm5hbWVzIjpbIkhpc3RvcnkiLCJwcm9wcyIsImxvZ2dlZEluIiwid29ya291dEhpc3RvcnkiLCJtYXAiLCJpbmRpdldvcmtvdXQiLCJkYXRlIiwibGVuZ3RoT2ZXb3Jrb3V0IiwiX2lkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVUsU0FBVkEsT0FBVSxDQUFDQyxLQUFEO0FBQUEsU0FDWjtBQUFBO0FBQUEsTUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFR0EsVUFBTUMsUUFBTixJQUFrQkQsTUFBTUUsY0FBTixDQUFxQkMsR0FBckIsQ0FBeUI7QUFBQSxhQUFnQixvQkFBQyxXQUFELElBQWEsTUFBTUMsYUFBYUMsSUFBaEMsRUFBc0MsaUJBQWlCRCxhQUFhRSxlQUFwRSxFQUFxRixLQUFLRixhQUFhRyxHQUF2RyxHQUFoQjtBQUFBLEtBQXpCLENBRnJCO0FBR0csS0FBQ1AsTUFBTUMsUUFBUCxJQUFvQjtBQUFBO0FBQUEsUUFBTSxXQUFVLG9CQUFoQjtBQUFBO0FBQUE7QUFIdkIsR0FEWTtBQUFBLENBQWQ7O0FBU0FPLE9BQU9ULE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6Ikhpc3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSGlzdG9yeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhpc3RvcnlcIj5cbiAgICA8aDE+IEhpc3RvcnkgPC9oMT5cbiAgICB7cHJvcHMubG9nZ2VkSW4gJiYgcHJvcHMud29ya291dEhpc3RvcnkubWFwKGluZGl2V29ya291dCA9PiA8UGFzdFdvcmtvdXQgZGF0ZT17aW5kaXZXb3Jrb3V0LmRhdGV9IGxlbmd0aE9mV29ya291dD17aW5kaXZXb3Jrb3V0Lmxlbmd0aE9mV29ya291dH0ga2V5PXtpbmRpdldvcmtvdXQuX2lkfS8+KX1cbiAgICB7IXByb3BzLmxvZ2dlZEluICYmICg8c3BhbiBjbGFzc05hbWU9J2hpc3RvcnlOb3RMb2dnZWRJbic+WW91IGFyZSBub3QgY3VycmVudGx5IGxvZ2dlZCBpbi4gUGxlYXNlIExvZyBJbiBvciBTaWduIFVwIHRvIHZpZXcgV29ya291dCBIaXN0b3J5Ljwvc3Bhbj4pfVxuICA8L2Rpdj5cbik7XG5cblxud2luZG93Lkhpc3RvcnkgPSBIaXN0b3J5O1xuIl19