"use strict";

var Login = function Login(props) {
  return React.createElement(
    "div",
    { className: "loginPage" },
    React.createElement(
      "h1",
      null,
      "Log In"
    ),
    React.createElement(
      "form",
      { onSubmit: props.login },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Username:"
      ),
      React.createElement("input", { id: "username", type: "text", name: "username" }),
      React.createElement(
        "label",
        { htmlFor: "password" },
        "Password:"
      ),
      React.createElement("input", { id: "password", type: "password", name: "password" }),
      React.createElement("input", { type: "submit", value: "Log In" })
    )
  );
};

window.Login = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ0luLmpzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInByb3BzIiwibG9naW4iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxTQUFSQSxLQUFRLENBQUNDLEtBQUQ7QUFBQSxTQUNWO0FBQUE7QUFBQSxNQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFVBQVVBLE1BQU1DLEtBQXRCO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssTUFBMUIsRUFBaUMsTUFBSyxVQUF0QyxHQUZGO0FBR0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQUhGO0FBSUUscUNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxVQUExQyxHQUpGO0FBS0UscUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sUUFBM0I7QUFMRjtBQUZGLEdBRFU7QUFBQSxDQUFaOztBQWNBQyxPQUFPSCxLQUFQLEdBQWVBLEtBQWYiLCJmaWxlIjoiTG9nSW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTG9naW4gPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2dpblBhZ2VcIj5cbiAgICA8aDE+TG9nIEluPC9oMT5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMubG9naW59PlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2cgSW5cIi8+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbik7XG5cblxud2luZG93LkxvZ2luID0gTG9naW47XG4iXX0=