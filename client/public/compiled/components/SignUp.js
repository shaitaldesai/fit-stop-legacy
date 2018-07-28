"use strict";

var SignUp = function SignUp(props) {
  return React.createElement(
    "div",
    { className: "signupPage" },
    React.createElement(
      "h1",
      null,
      "Sign Up"
    ),
    React.createElement(
      "form",
      { onSubmit: props.signup },
      React.createElement(
        "label",
        { htmlFor: "username" },
        "Username:  "
      ),
      React.createElement("input", { id: "username", type: "text", name: "username" }),
      React.createElement(
        "label",
        { htmlFor: "password" },
        "Password:"
      ),
      React.createElement("input", { id: "password", type: "password", name: "password" }),
      React.createElement("input", { type: "submit", value: "Sign Up" })
    )
  );
};

window.SignUp = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NpZ25VcC5qc3giXSwibmFtZXMiOlsiU2lnblVwIiwicHJvcHMiLCJzaWdudXAiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFNLFVBQVVBLE1BQU1DLE1BQXRCO0FBQ0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQURGO0FBRUUscUNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssTUFBMUIsRUFBaUMsTUFBSyxVQUF0QyxHQUZGO0FBR0U7QUFBQTtBQUFBLFVBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxPQUhGO0FBSUUscUNBQU8sSUFBRyxVQUFWLEVBQXFCLE1BQUssVUFBMUIsRUFBcUMsTUFBSyxVQUExQyxHQUpGO0FBS0UscUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sU0FBM0I7QUFMRjtBQUZGLEdBRFc7QUFBQSxDQUFiOztBQWNBQyxPQUFPSCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTaWduVXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2lnblVwID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwUGFnZVwiPlxuICAgIDxoMT5TaWduIFVwPC9oMT5cbiAgICA8Zm9ybSBvblN1Ym1pdD17cHJvcHMuc2lnbnVwfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTogIDwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduIFVwXCIvPlxuICAgIDwvZm9ybT5cbiAgPC9kaXY+XG4pO1xuXG5cbndpbmRvdy5TaWduVXAgPSBTaWduVXA7XG4iXX0=