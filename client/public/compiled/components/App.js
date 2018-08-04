'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      currentState: 'Dashboard',
      currentWorkout: window.exampleExerciseData,
      currentExercise: 0,
      workoutDate: null,
      workoutHistory: [],
      username: null,
      loggedIn: false,
      countdown: 3,
      time: null,
      showButtons: true,
      workoutLengthInMins: 2,
      workoutList: []
    };

    _this.goToWorkout = _this.goToWorkout.bind(_this);
    _this.goToSummary = _this.goToSummary.bind(_this);
    _this.goToDashboard = _this.goToDashboard.bind(_this);
    _this.goToCountdown = _this.goToCountdown.bind(_this);
    _this.goToLogin = _this.goToLogin.bind(_this);
    _this.goToSignUp = _this.goToSignUp.bind(_this);
    _this.getWorkoutHistory = _this.getWorkoutHistory.bind(_this);
    _this.sendWorkoutData = _this.sendWorkoutData.bind(_this);
    _this.logOut = _this.logOut.bind(_this);
    _this.login = _this.login.bind(_this);
    _this.signup = _this.signup.bind(_this);
    _this.handleWorkoutSelection = _this.handleWorkoutSelection.bind(_this);
    return _this;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * *
    The following functions change the view on the app
  * * * * * * * * * * * * * * * * * * * * * * * * * * */

  _createClass(App, [{
    key: 'goToDashboard',
    value: function goToDashboard() {
      this.setState({ currentState: 'Dashboard' });
      this.setState({ showButtons: true });
      if (this.state.loggedIn) {
        this.getWorkoutHistory();
      }
      if (this.state.interval) {
        clearInterval(this.state.interval);
      }
    }
  }, {
    key: 'goToLogin',
    value: function goToLogin() {
      this.setState({ currentState: 'Login' });
    }
  }, {
    key: 'goToSignUp',
    value: function goToSignUp() {
      this.setState({ currentState: 'SignUp' });
    }
  }, {
    key: 'goToCountdown',
    value: function goToCountdown() {
      this.setState({ currentState: 'Countdown' });
      this.setState({ showButtons: false });
      this.setState({ currentExercise: 0 });
      // this.getExercises(); //uncomment to fetch from db
      this.startCountdown();
    }
  }, {
    key: 'goToWorkout',
    value: function goToWorkout() {
      this.setState({ currentState: 'Workout' });
      this.startTimer();
    }
  }, {
    key: 'goToSummary',
    value: function goToSummary() {
      this.setState({ currentState: 'Summary' });
      this.setState({ showButtons: true });
      var currentDate = Date();
      this.setState({ workoutDate: currentDate });
      clearInterval(this.state.interval);
      if (this.state.loggedIn) {
        this.sendWorkoutData();
      }
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      The following functions send requests to the server
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('called listExercises');
      $.ajax({
        method: 'GET',
        url: '/getAllExercises',
        success: function success(data) {
          data = JSON.parse(data);
          _this2.setState({ workoutList: data });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'handleWorkoutSelection',
    value: function handleWorkoutSelection(e) {
      var _this3 = this;

      // var id = e.target.getAttribute('value');
      var name = e.target.innerText;
      $.ajax({
        method: 'GET',
        url: '/getExercise/' + name,
        success: function success(data) {
          debugger;
          console.log(data);
          _this3.setState({ currentWorkout: data });
          // this.setState({currentWorkout:exercise.responseText})
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getWorkoutHistory',
    value: function getWorkoutHistory() {
      var _this4 = this;

      $.ajax({
        method: 'GET',
        url: '/history',
        dataType: 'json',
        data: {
          username: this.state.username
        },
        complete: function complete(data) {
          var firstFive = JSON.parse(data.responseText).slice(0, 5);
          _this4.setState({ workoutHistory: firstFive });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getExercises',
    value: function getExercises() {
      var _this5 = this;

      $.ajax({
        method: 'GET',
        url: '/workout',
        dataType: 'json',
        data: {
          lengthOfWorkout: this.state.workoutLengthInMins
        },
        complete: function complete(data) {
          console.log('exercise data:', data);
          _this5.setState({ currentWorkout: JSON.parse(data.responseText) });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'sendWorkoutData',
    value: function sendWorkoutData() {
      $.ajax({
        type: 'POST',
        url: '/addWorkout',
        data: JSON.stringify({
          username: this.state.username,
          date: Date(),
          currentWorkout: this.state.currentWorkout,
          lengthOfWorkout: this.state.workoutLengthInMins
        }),
        contentType: 'application/json',
        dataType: 'json',
        success: function success(data) {
          console.log('succesfully posted data!');
        }
      });
    }
  }, {
    key: 'login',
    value: function login(event) {
      var _this6 = this;

      event.preventDefault();
      var data = new FormData(event.target);
      var username = data.get('username');
      var password = data.get('password');

      $.ajax({
        type: "POST",
        url: '/login',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json',
        dataType: 'json',
        complete: function complete(data) {
          if (data.responseText === "Log in success") {
            _this6.setState({ username: username });
            _this6.setState({ loggedIn: true });
            _this6.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this6.goToLogin();
          }
        }
      });
    }
  }, {
    key: 'signup',
    value: function signup(event) {
      var _this7 = this;

      event.preventDefault();
      var data = new FormData(event.target);
      var username = data.get('username');
      var password = data.get('password');

      $.ajax({
        type: "POST",
        url: '/signup',
        data: JSON.stringify({
          username: username,
          password: password
        }),
        contentType: 'application/json',
        dataType: 'json',
        complete: function complete(data) {
          if (data.responseText === "User Created") {
            _this7.setState({ username: username });
            _this7.setState({ loggedIn: true });
            _this7.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this7.goToSignUp();
          }
        }
      });
    }
  }, {
    key: 'logOut',
    value: function logOut() {
      this.setState({ loggedIn: false });
      this.setState({ username: null });
      this.goToDashboard();
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Countdown and Timer Functions
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'startCountdown',
    value: function startCountdown() {
      this.setState({ countdown: 3 });
      var interval = setInterval(this.countdown.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'countdown',
    value: function countdown() {
      var current = this.state.countdown;
      current--;
      this.setState({ countdown: current });
      if (this.state.countdown === 0) {
        clearInterval(this.state.interval);
        this.goToWorkout();
      }
    }
  }, {
    key: 'startTimer',
    value: function startTimer() {
      var current = this.state.workoutLengthInMins * 60;
      this.setState({ time: current });
      var interval = setInterval(this.timer.bind(this), 1000);
      this.setState({ interval: interval });
    }
  }, {
    key: 'timer',
    value: function timer() {
      var current = this.state.time;
      current--;
      this.setState({ time: current });
      if (this.state.time <= 0) {
        this.goToSummary();
      } else if (this.state.time % 60 === 0) {
        var next = this.state.currentExercise;
        next++;
        this.setState({ currentExercise: next });
        this.refs.workoutPage.highlightActiveTitle();
      }
    }
  }, {
    key: 'formatTime',
    value: function formatTime(seconds) {
      var mm = Math.floor(seconds / 60);
      var ss = seconds % 60;
      if (ss < 10) {
        ss = '0' + ss;
      }
      return mm + ':' + ss;
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Renders the components based ot the current state
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var toBeRendered = function toBeRendered() {

        if (_this8.state.currentState === 'Dashboard') {
          return React.createElement(
            'div',
            null,
            React.createElement(
              'p',
              null,
              ' Select your workout '
            ),
            React.createElement(ExerciseOptions, { exercises: _this8.state.workoutList, handleWorkoutSelection: _this8.handleWorkoutSelection }),
            React.createElement(Dashboard, { goToCountdown: _this8.goToCountdown, workoutHistory: _this8.state.workoutHistory, loggedIn: _this8.state.loggedIn })
          );
        }
        if (_this8.state.currentState === 'Login') {
          return React.createElement(Login, { login: _this8.login });
        }
        if (_this8.state.currentState === 'SignUp') {
          return React.createElement(SignUp, { signup: _this8.signup });
        }
        if (_this8.state.currentState === 'Countdown') {
          return React.createElement(Countdown, { countdown: _this8.state.countdown });
        }
        if (_this8.state.currentState === 'Workout') {
          // console.log('IMPORTANFNFJF', {this.state.currentWorkout})
          return React.createElement(Workout, { exercise: _this8.state.currentWorkout[_this8.state.currentExercise], timer: _this8.formatTime(_this8.state.time), countdown: _this8.state.countdown, goToSummary: _this8.goToSummary, goToDashboard: _this8.goToDashboard, ref: 'workoutPage' });
        }
        if (_this8.state.currentState === 'Summary') {
          return React.createElement(Summary, { goToDashboard: _this8.goToDashboard, currentWorkout: _this8.state.currentWorkout, workoutDate: _this8.state.workoutDate, workoutLengthInMins: _this8.state.workoutLengthInMins, loggedIn: _this8.state.loggedIn });
        }
      };

      return React.createElement(
        'div',
        { className: 'App' },
        React.createElement(Header, { username: this.state.username, goToLogin: this.goToLogin, goToSignUp: this.goToSignUp, loggedIn: this.state.loggedIn, logOut: this.logOut, showButtons: this.state.showButtons }),
        toBeRendered()
      );
    }
  }]);

  return App;
}(React.Component); // End of Class

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJ3b3Jrb3V0TGlzdCIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJnb1RvTG9naW4iLCJnb1RvU2lnblVwIiwiZ2V0V29ya291dEhpc3RvcnkiLCJzZW5kV29ya291dERhdGEiLCJsb2dPdXQiLCJsb2dpbiIsInNpZ251cCIsImhhbmRsZVdvcmtvdXRTZWxlY3Rpb24iLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJlcnIiLCJlIiwibmFtZSIsInRhcmdldCIsImlubmVyVGV4dCIsImRhdGFUeXBlIiwiY29tcGxldGUiLCJmaXJzdEZpdmUiLCJyZXNwb25zZVRleHQiLCJzbGljZSIsImxlbmd0aE9mV29ya291dCIsInR5cGUiLCJzdHJpbmdpZnkiLCJkYXRlIiwiY29udGVudFR5cGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJnZXQiLCJwYXNzd29yZCIsImFsZXJ0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwidGltZXIiLCJuZXh0IiwicmVmcyIsIndvcmtvdXRQYWdlIiwiaGlnaGxpZ2h0QWN0aXZlVGl0bGUiLCJzZWNvbmRzIiwibW0iLCJNYXRoIiwiZmxvb3IiLCJzcyIsInRvQmVSZW5kZXJlZCIsImZvcm1hdFRpbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxXQURIO0FBRVhDLHNCQUFnQkMsT0FBT0MsbUJBRlo7QUFHWEMsdUJBQWlCLENBSE47QUFJWEMsbUJBQWEsSUFKRjtBQUtYQyxzQkFBZ0IsRUFMTDtBQU1YQyxnQkFBVSxJQU5DO0FBT1hDLGdCQUFVLEtBUEM7QUFRWEMsaUJBQVcsQ0FSQTtBQVNYQyxZQUFNLElBVEs7QUFVWEMsbUJBQWEsSUFWRjtBQVdYQywyQkFBcUIsQ0FYVjtBQVlYQyxtQkFBYTtBQVpGLEtBQWI7O0FBZUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSixJQUFmLE9BQWpCO0FBQ0EsVUFBS0ssVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTCxJQUFoQixPQUFsQjtBQUNBLFVBQUtNLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCTixJQUF2QixPQUF6QjtBQUNBLFVBQUtPLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQlAsSUFBckIsT0FBdkI7QUFDQSxVQUFLUSxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZUixJQUFaLE9BQWQ7QUFDQSxVQUFLUyxLQUFMLEdBQWEs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QUF2TSxFQUFzTixLQUFJLGFBQTFOLEdBQVI7QUFDRDtBQUNELFlBQUksT0FBS2xCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxpQkFBUSxvQkFBQyxPQUFELElBQVMsZUFBZSxPQUFLaUIsYUFBN0IsRUFBNEMsZ0JBQWdCLE9BQUtsQixLQUFMLENBQVdFLGNBQXZFLEVBQXVGLGFBQWEsT0FBS0YsS0FBTCxDQUFXTSxXQUEvRyxFQUE0SCxxQkFBcUIsT0FBS04sS0FBTCxDQUFXYSxtQkFBNUosRUFBaUwsVUFBVSxPQUFLYixLQUFMLENBQVdTLFFBQXRNLEdBQVI7QUFDRDtBQUNGLE9BN0JEOztBQStCQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLVCxLQUFMLENBQVdRLFFBQTdCLEVBQXVDLFdBQVcsS0FBS1ksU0FBdkQsRUFBa0UsWUFBWSxLQUFLQyxVQUFuRixFQUErRixVQUFVLEtBQUtyQixLQUFMLENBQVdTLFFBQXBILEVBQThILFFBQVEsS0FBS2UsTUFBM0ksRUFBbUosYUFBYSxLQUFLeEIsS0FBTCxDQUFXWSxXQUEzSyxHQURGO0FBRUdtRTtBQUZILE9BREY7QUFPRDs7OztFQTlVZUUsTUFBTUMsUyxHQWdWdEI7O0FBRUYvRSxPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJyxcbiAgICAgIGN1cnJlbnRXb3Jrb3V0OiB3aW5kb3cuZXhhbXBsZUV4ZXJjaXNlRGF0YSxcbiAgICAgIGN1cnJlbnRFeGVyY2lzZTogMCxcbiAgICAgIHdvcmtvdXREYXRlOiBudWxsLFxuICAgICAgd29ya291dEhpc3Rvcnk6IFtdLFxuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICBjb3VudGRvd246IDMsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgc2hvd0J1dHRvbnM6IHRydWUsXG4gICAgICB3b3Jrb3V0TGVuZ3RoSW5NaW5zOiAyLFxuICAgICAgd29ya291dExpc3Q6IFtdXG4gICAgfTtcblxuICAgIHRoaXMuZ29Ub1dvcmtvdXQgPSB0aGlzLmdvVG9Xb3Jrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU3VtbWFyeSA9IHRoaXMuZ29Ub1N1bW1hcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Db3VudGRvd24gPSB0aGlzLmdvVG9Db3VudGRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Mb2dpbiA9IHRoaXMuZ29Ub0xvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU2lnblVwID0gdGhpcy5nb1RvU2lnblVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSA9IHRoaXMuZ2V0V29ya291dEhpc3RvcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSA9IHRoaXMuc2VuZFdvcmtvdXREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWdudXAgPSB0aGlzLnNpZ251cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlV29ya291dFNlbGVjdGlvbiA9IHRoaXMuaGFuZGxlV29ya291dFNlbGVjdGlvbi5iaW5kKHRoaXMpO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGNoYW5nZSB0aGUgdmlldyBvbiB0aGUgYXBwXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICBnb1RvRGFzaGJvYXJkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0Rhc2hib2FyZCd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmdldFdvcmtvdXRIaXN0b3J5KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdMb2dpbid9KVxuICB9XG5cbiAgZ29Ub1NpZ25VcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTaWduVXAnfSlcbiAgfVxuXG4gIGdvVG9Db3VudGRvd24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnQ291bnRkb3duJ30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dCdXR0b25zOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRFeGVyY2lzZTogMH0pO1xuICAgLy8gdGhpcy5nZXRFeGVyY2lzZXMoKTsgLy91bmNvbW1lbnQgdG8gZmV0Y2ggZnJvbSBkYlxuICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgfVxuXG4gIGdvVG9Xb3Jrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ1dvcmtvdXQnfSk7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICBnb1RvU3VtbWFyeSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTdW1tYXJ5J30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dCdXR0b25zOiB0cnVlfSk7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gRGF0ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXREYXRlOiBjdXJyZW50RGF0ZX0pO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuc2VuZFdvcmtvdXREYXRhKCk7XG4gICAgfVxuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIHNlbmQgcmVxdWVzdHMgdG8gdGhlIHNlcnZlclxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnY2FsbGVkIGxpc3RFeGVyY2lzZXMnKVxuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2dldEFsbEV4ZXJjaXNlcycsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d29ya291dExpc3Q6IGRhdGF9KTtcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgaGFuZGxlV29ya291dFNlbGVjdGlvbihlKSB7XG5cbiAgICAvLyB2YXIgaWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgdmFyIG5hbWUgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6IGAvZ2V0RXhlcmNpc2UvJHtuYW1lfWAsXG4gICAgICBzdWNjZXNzOiAoZGF0YSkgPT4ge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFdvcmtvdXQ6IGRhdGF9KVxuICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFdvcmtvdXQ6ZXhlcmNpc2UucmVzcG9uc2VUZXh0fSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgZ2V0V29ya291dEhpc3RvcnkoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvaGlzdG9yeScsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgZmlyc3RGaXZlID0gSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlVGV4dCkuc2xpY2UoMCwgNSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXRIaXN0b3J5OiBmaXJzdEZpdmV9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXhlcmNpc2VzKCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL3dvcmtvdXQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGVuZ3RoT2ZXb3Jrb3V0OiB0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnNcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4ZXJjaXNlIGRhdGE6JywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OiBKU09OLnBhcnNlKGRhdGEucmVzcG9uc2VUZXh0KX0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZW5kV29ya291dERhdGEoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hZGRXb3Jrb3V0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgIGRhdGU6IERhdGUoKSxcbiAgICAgICAgY3VycmVudFdvcmtvdXQ6IHRoaXMuc3RhdGUuY3VycmVudFdvcmtvdXQsXG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bGx5IHBvc3RlZCBkYXRhIScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGxvZ2luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbXBsZXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VUZXh0ID09PSBcIkxvZyBpbiBzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvTG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJVc2VyIENyZWF0ZWRcIikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB1c2VybmFtZX0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiB0cnVlfSk7XG4gICAgICAgICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJVc2VybmFtZSBhbmQgUGFzc3dvcmQgSW52YWxpZFwiKTtcbiAgICAgICAgICB0aGlzLmdvVG9TaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9nT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBudWxsfSk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgQ291bnRkb3duIGFuZCBUaW1lciBGdW5jdGlvbnNcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogM30pO1xuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudGRvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICBjb3VudGRvd24oKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmNvdW50ZG93bjtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRkb3duOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnRkb3duID09PSAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgICAgdGhpcy5nb1RvV29ya291dCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnMgKiA2MDtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aW1lci5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbDogaW50ZXJ2YWx9KTtcbiAgfVxuXG4gIHRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS50aW1lO1xuICAgIGN1cnJlbnQtLTtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA8PSAwKSB7XG4gICAgICB0aGlzLmdvVG9TdW1tYXJ5KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRpbWUgJSA2MCA9PT0gMCkge1xuICAgICAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLmN1cnJlbnRFeGVyY2lzZTtcbiAgICAgIG5leHQrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRFeGVyY2lzZTogbmV4dH0pO1xuICAgICAgdGhpcy5yZWZzLndvcmtvdXRQYWdlLmhpZ2hsaWdodEFjdGl2ZVRpdGxlKCk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VGltZShzZWNvbmRzKSB7XG4gICAgdmFyIG1tID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIHZhciBzcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoc3MgPCAxMCkge1xuICAgICAgc3MgPSAnMCcgKyBzcztcbiAgICB9XG4gICAgcmV0dXJuIG1tICsgJzonICsgc3M7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgUmVuZGVycyB0aGUgY29tcG9uZW50cyBiYXNlZCBvdCB0aGUgY3VycmVudCBzdGF0ZVxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b0JlUmVuZGVyZWQgPSAoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0Rhc2hib2FyZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8cD4gU2VsZWN0IHlvdXIgd29ya291dCA8L3A+XG4gICAgICAgICAgIDxFeGVyY2lzZU9wdGlvbnMgZXhlcmNpc2VzPXt0aGlzLnN0YXRlLndvcmtvdXRMaXN0fSBoYW5kbGVXb3Jrb3V0U2VsZWN0aW9uPXt0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgIDxEYXNoYm9hcmQgZ29Ub0NvdW50ZG93bj17dGhpcy5nb1RvQ291bnRkb3dufSB3b3Jrb3V0SGlzdG9yeT17dGhpcy5zdGF0ZS53b3Jrb3V0SGlzdG9yeX0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdMb2dpbicpIHtcbiAgICAgICAgICByZXR1cm4gKDxMb2dpbiBsb2dpbj17dGhpcy5sb2dpbn0gLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU2lnblVwJykge1xuICAgICAgICAgIHJldHVybiAoPFNpZ25VcCBzaWdudXA9e3RoaXMuc2lnbnVwfSAgLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnQ291bnRkb3duJykge1xuICAgICAgICAgIHJldHVybiAoPENvdW50ZG93biBjb3VudGRvd249e3RoaXMuc3RhdGUuY291bnRkb3dufSAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdXb3Jrb3V0Jykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnSU1QT1JUQU5GTkZKRicsIHt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0fSlcbiAgICAgICAgcmV0dXJuICg8V29ya291dCBleGVyY2lzZT17dGhpcy5zdGF0ZS5jdXJyZW50V29ya291dFt0aGlzLnN0YXRlLmN1cnJlbnRFeGVyY2lzZV19IHRpbWVyPXt0aGlzLmZvcm1hdFRpbWUodGhpcy5zdGF0ZS50aW1lKX0gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gZ29Ub1N1bW1hcnk9e3RoaXMuZ29Ub1N1bW1hcnl9IGdvVG9EYXNoYm9hcmQ9e3RoaXMuZ29Ub0Rhc2hib2FyZH0gcmVmPVwid29ya291dFBhZ2VcIiAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdTdW1tYXJ5Jykge1xuICAgICAgICByZXR1cm4gKDxTdW1tYXJ5IGdvVG9EYXNoYm9hcmQ9e3RoaXMuZ29Ub0Rhc2hib2FyZH0gY3VycmVudFdvcmtvdXQ9e3RoaXMuc3RhdGUuY3VycmVudFdvcmtvdXR9IHdvcmtvdXREYXRlPXt0aGlzLnN0YXRlLndvcmtvdXREYXRlfSB3b3Jrb3V0TGVuZ3RoSW5NaW5zPXt0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnN9IGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufSAvPik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJBcHBcIj5cbiAgICAgICAgPEhlYWRlciB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gZ29Ub0xvZ2luPXt0aGlzLmdvVG9Mb2dpbn0gZ29Ub1NpZ25VcD17dGhpcy5nb1RvU2lnblVwfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gbG9nT3V0PXt0aGlzLmxvZ091dH0gc2hvd0J1dHRvbnM9e3RoaXMuc3RhdGUuc2hvd0J1dHRvbnN9Lz5cbiAgICAgICAge3RvQmVSZW5kZXJlZCgpfVxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufSAvLyBFbmQgb2YgQ2xhc3Ncblxud2luZG93LkFwcCA9IEFwcDsiXX0=