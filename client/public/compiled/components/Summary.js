"use strict";

var Summary = function Summary(props) {
  return React.createElement(
    "div",
    { className: "summary" },
    React.createElement(
      "h1",
      null,
      "Workout Summary"
    ),
    React.createElement(
      "span",
      { className: "summaryCongrats congratulations" },
      "All Done! Congratulations! \uD83C\uDF89"
    ),
    " ",
    React.createElement("br", null),
    !props.loggedIn && React.createElement(
      "span",
      { className: "alert" },
      "\u26A0\uFE0F  You are currently not logged in. Workout Summary data will not be saved."
    ),
    React.createElement(
      "div",
      { className: "summaryStats" },
      React.createElement(
        "h3",
        { className: "summaryTitle" },
        " Date: "
      ),
      " ",
      props.workoutDate,
      React.createElement(
        "h3",
        { className: "summaryTitle" },
        " Length of Workout: "
      ),
      " ",
      props.workoutLengthInMins,
      " minutes",
      React.createElement(
        "h3",
        { className: "summaryTitle" },
        " Warmup: "
      ),
      props.currentWorkout[0].name,
      ", ",
      props.currentWorkout[1].name,
      ", ",
      props.currentWorkout[2].name,
      React.createElement(
        "h3",
        { className: "summaryTitle" },
        " Workout: "
      ),
      props.currentWorkout[3].name,
      ", ",
      props.currentWorkout[4].name,
      ", ",
      props.currentWorkout[5].name,
      ", ",
      props.currentWorkout[6].name,
      ", ",
      props.currentWorkout[7].name,
      ", ",
      props.currentWorkout[8].name,
      ", ",
      props.currentWorkout[9].name,
      ", ",
      props.currentWorkout[10].name,
      ", ",
      props.currentWorkout[11].name,
      React.createElement(
        "h3",
        { className: "summaryTitle" },
        " Cooldown: "
      ),
      props.currentWorkout[12].name,
      ", ",
      props.currentWorkout[13].name,
      ", ",
      props.currentWorkout[14].name
    ),
    React.createElement(
      "span",
      { className: "summaryQuote" },
      "\"Good things come to those who sweat.\""
    ),
    React.createElement(
      "button",
      { onClick: props.goToDashboard, className: "blackButton" },
      "Back To Dashboard"
    )
  );
};

window.Summary = Summary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N1bW1hcnkuanN4Il0sIm5hbWVzIjpbIlN1bW1hcnkiLCJwcm9wcyIsImxvZ2dlZEluIiwid29ya291dERhdGUiLCJ3b3Jrb3V0TGVuZ3RoSW5NaW5zIiwiY3VycmVudFdvcmtvdXQiLCJuYW1lIiwiZ29Ub0Rhc2hib2FyZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxVQUFVLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRDtBQUFBLFNBQ1o7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBRUU7QUFBQTtBQUFBLFFBQU0sV0FBVSxpQ0FBaEI7QUFBQTtBQUFBLEtBRkY7QUFBQTtBQUV5RixtQ0FGekY7QUFHRyxLQUFDQSxNQUFNQyxRQUFQLElBQW9CO0FBQUE7QUFBQSxRQUFNLFdBQVUsT0FBaEI7QUFBQTtBQUFBLEtBSHZCO0FBSUU7QUFBQTtBQUFBLFFBQUssV0FBVSxjQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSxPQURGO0FBQUE7QUFDNkNELFlBQU1FLFdBRG5EO0FBRUU7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSxPQUZGO0FBQUE7QUFFMERGLFlBQU1HLG1CQUZoRTtBQUFBO0FBR0U7QUFBQTtBQUFBLFVBQUksV0FBVSxjQUFkO0FBQUE7QUFBQSxPQUhGO0FBRzhDSCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUh0RTtBQUFBO0FBRzhFTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUh0RztBQUFBO0FBRzhHTCxZQUFNSSxjQUFOLENBQXFCLENBQXJCLEVBQXdCQyxJQUh0STtBQUlFO0FBQUE7QUFBQSxVQUFJLFdBQVUsY0FBZDtBQUFBO0FBQUEsT0FKRjtBQUkrQ0wsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdkU7QUFBQTtBQUkrRUwsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdkc7QUFBQTtBQUkrR0wsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdkk7QUFBQTtBQUkrSUwsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdks7QUFBQTtBQUkrS0wsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdk07QUFBQTtBQUkrTUwsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdk87QUFBQTtBQUkrT0wsWUFBTUksY0FBTixDQUFxQixDQUFyQixFQUF3QkMsSUFKdlE7QUFBQTtBQUkrUUwsWUFBTUksY0FBTixDQUFxQixFQUFyQixFQUF5QkMsSUFKeFM7QUFBQTtBQUlnVEwsWUFBTUksY0FBTixDQUFxQixFQUFyQixFQUF5QkMsSUFKelU7QUFLRTtBQUFBO0FBQUEsVUFBSSxXQUFVLGNBQWQ7QUFBQTtBQUFBLE9BTEY7QUFLZ0RMLFlBQU1JLGNBQU4sQ0FBcUIsRUFBckIsRUFBeUJDLElBTHpFO0FBQUE7QUFLaUZMLFlBQU1JLGNBQU4sQ0FBcUIsRUFBckIsRUFBeUJDLElBTDFHO0FBQUE7QUFLa0hMLFlBQU1JLGNBQU4sQ0FBcUIsRUFBckIsRUFBeUJDO0FBTDNJLEtBSkY7QUFXRTtBQUFBO0FBQUEsUUFBTSxXQUFVLGNBQWhCO0FBQUE7QUFBQSxLQVhGO0FBWUU7QUFBQTtBQUFBLFFBQVEsU0FBU0wsTUFBTU0sYUFBdkIsRUFBc0MsV0FBVSxhQUFoRDtBQUFBO0FBQUE7QUFaRixHQURZO0FBQUEsQ0FBZDs7QUFtQkFDLE9BQU9SLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IlN1bW1hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3VtbWFyeSA9IChwcm9wcykgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnlcIj5cbiAgICA8aDE+V29ya291dCBTdW1tYXJ5PC9oMT5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5Q29uZ3JhdHMgY29uZ3JhdHVsYXRpb25zXCI+QWxsIERvbmUhIENvbmdyYXR1bGF0aW9ucyEg8J+OiTwvc3Bhbj4gPGJyIC8+XG4gICAgeyFwcm9wcy5sb2dnZWRJbiAmJiAoPHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRcIj7imqDvuI8gIFlvdSBhcmUgY3VycmVudGx5IG5vdCBsb2dnZWQgaW4uIFdvcmtvdXQgU3VtbWFyeSBkYXRhIHdpbGwgbm90IGJlIHNhdmVkLjwvc3Bhbj4pfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVN0YXRzXCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IERhdGU6IDwvaDM+IHtwcm9wcy53b3Jrb3V0RGF0ZX1cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJzdW1tYXJ5VGl0bGVcIj4gTGVuZ3RoIG9mIFdvcmtvdXQ6IDwvaDM+IHtwcm9wcy53b3Jrb3V0TGVuZ3RoSW5NaW5zfSBtaW51dGVzXG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IFdhcm11cDogPC9oMz57cHJvcHMuY3VycmVudFdvcmtvdXRbMF0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxXS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzJdLm5hbWV9XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IFdvcmtvdXQ6IDwvaDM+e3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzNdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbNF0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFs1XS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzZdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbN10ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFs4XS5uYW1lfSwge3Byb3BzLmN1cnJlbnRXb3Jrb3V0WzldLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbMTBdLm5hbWV9LCB7cHJvcHMuY3VycmVudFdvcmtvdXRbMTFdLm5hbWV9XG4gICAgICA8aDMgY2xhc3NOYW1lPVwic3VtbWFyeVRpdGxlXCI+IENvb2xkb3duOiA8L2gzPntwcm9wcy5jdXJyZW50V29ya291dFsxMl0ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxM10ubmFtZX0sIHtwcm9wcy5jdXJyZW50V29ya291dFsxNF0ubmFtZX1cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJzdW1tYXJ5UXVvdGVcIj5cIkdvb2QgdGhpbmdzIGNvbWUgdG8gdGhvc2Ugd2hvIHN3ZWF0LlwiPC9zcGFuPlxuICAgIDxidXR0b24gb25DbGljaz17cHJvcHMuZ29Ub0Rhc2hib2FyZH0gY2xhc3NOYW1lPVwiYmxhY2tCdXR0b25cIj5CYWNrIFRvIERhc2hib2FyZDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuKTtcblxuXG53aW5kb3cuU3VtbWFyeSA9IFN1bW1hcnk7XG4iXX0=