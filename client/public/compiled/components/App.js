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
      workoutLengthInMins: 15,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJ3b3Jrb3V0TGlzdCIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJnb1RvTG9naW4iLCJnb1RvU2lnblVwIiwiZ2V0V29ya291dEhpc3RvcnkiLCJzZW5kV29ya291dERhdGEiLCJsb2dPdXQiLCJsb2dpbiIsInNpZ251cCIsImhhbmRsZVdvcmtvdXRTZWxlY3Rpb24iLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJlcnIiLCJlIiwibmFtZSIsInRhcmdldCIsImlubmVyVGV4dCIsImRhdGFUeXBlIiwiY29tcGxldGUiLCJmaXJzdEZpdmUiLCJyZXNwb25zZVRleHQiLCJzbGljZSIsImxlbmd0aE9mV29ya291dCIsInR5cGUiLCJzdHJpbmdpZnkiLCJkYXRlIiwiY29udGVudFR5cGUiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiRm9ybURhdGEiLCJnZXQiLCJwYXNzd29yZCIsImFsZXJ0Iiwic2V0SW50ZXJ2YWwiLCJjdXJyZW50IiwidGltZXIiLCJuZXh0IiwicmVmcyIsIndvcmtvdXRQYWdlIiwiaGlnaGxpZ2h0QWN0aXZlVGl0bGUiLCJzZWNvbmRzIiwibW0iLCJNYXRoIiwiZmxvb3IiLCJzcyIsInRvQmVSZW5kZXJlZCIsImZvcm1hdFRpbWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUVaLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxXQURIO0FBRVhDLHNCQUFnQkMsT0FBT0MsbUJBRlo7QUFHWEMsdUJBQWlCLENBSE47QUFJWEMsbUJBQWEsSUFKRjtBQUtYQyxzQkFBZ0IsRUFMTDtBQU1YQyxnQkFBVSxJQU5DO0FBT1hDLGdCQUFVLEtBUEM7QUFRWEMsaUJBQVcsQ0FSQTtBQVNYQyxZQUFNLElBVEs7QUFVWEMsbUJBQWEsSUFWRjtBQVdYQywyQkFBcUIsRUFYVjtBQVlYQyxtQkFBYTtBQVpGLEtBQWI7O0FBZUEsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQixPQUFuQjtBQUNBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkQsSUFBakIsT0FBbkI7QUFDQSxVQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsVUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFVBQUtJLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSixJQUFmLE9BQWpCO0FBQ0EsVUFBS0ssVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCTCxJQUFoQixPQUFsQjtBQUNBLFVBQUtNLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCTixJQUF2QixPQUF6QjtBQUNBLFVBQUtPLGVBQUwsR0FBdUIsTUFBS0EsZUFBTCxDQUFxQlAsSUFBckIsT0FBdkI7QUFDQSxVQUFLUSxNQUFMLEdBQWMsTUFBS0EsTUFBTCxDQUFZUixJQUFaLE9BQWQ7QUFDQSxVQUFLUyxLQUFMLEdBQWEs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QUF2TSxFQUFzTixLQUFJLGFBQTFOLEdBQVI7QUFDRDtBQUNELFlBQUksT0FBS2xCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxpQkFBUSxvQkFBQyxPQUFELElBQVMsZUFBZSxPQUFLaUIsYUFBN0IsRUFBNEMsZ0JBQWdCLE9BQUtsQixLQUFMLENBQVdFLGNBQXZFLEVBQXVGLGFBQWEsT0FBS0YsS0FBTCxDQUFXTSxXQUEvRyxFQUE0SCxxQkFBcUIsT0FBS04sS0FBTCxDQUFXYSxtQkFBNUosRUFBaUwsVUFBVSxPQUFLYixLQUFMLENBQVdTLFFBQXRNLEdBQVI7QUFDRDtBQUNGLE9BN0JEOztBQStCQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLVCxLQUFMLENBQVdRLFFBQTdCLEVBQXVDLFdBQVcsS0FBS1ksU0FBdkQsRUFBa0UsWUFBWSxLQUFLQyxVQUFuRixFQUErRixVQUFVLEtBQUtyQixLQUFMLENBQVdTLFFBQXBILEVBQThILFFBQVEsS0FBS2UsTUFBM0ksRUFBbUosYUFBYSxLQUFLeEIsS0FBTCxDQUFXWSxXQUEzSyxHQURGO0FBRUdtRTtBQUZILE9BREY7QUFPRDs7OztFQTlVZUUsTUFBTUMsUyxHQWdWdEI7O0FBRUYvRSxPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJyxcbiAgICAgIGN1cnJlbnRXb3Jrb3V0OiB3aW5kb3cuZXhhbXBsZUV4ZXJjaXNlRGF0YSxcbiAgICAgIGN1cnJlbnRFeGVyY2lzZTogMCxcbiAgICAgIHdvcmtvdXREYXRlOiBudWxsLFxuICAgICAgd29ya291dEhpc3Rvcnk6IFtdLFxuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICBjb3VudGRvd246IDMsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgc2hvd0J1dHRvbnM6IHRydWUsXG4gICAgICB3b3Jrb3V0TGVuZ3RoSW5NaW5zOiAxNSxcbiAgICAgIHdvcmtvdXRMaXN0OiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmdvVG9Xb3Jrb3V0ID0gdGhpcy5nb1RvV29ya291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1N1bW1hcnkgPSB0aGlzLmdvVG9TdW1tYXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvQ291bnRkb3duID0gdGhpcy5nb1RvQ291bnRkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvTG9naW4gPSB0aGlzLmdvVG9Mb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1NpZ25VcCA9IHRoaXMuZ29Ub1NpZ25VcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0V29ya291dEhpc3RvcnkgPSB0aGlzLmdldFdvcmtvdXRIaXN0b3J5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kV29ya291dERhdGEgPSB0aGlzLnNlbmRXb3Jrb3V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lnbnVwID0gdGhpcy5zaWdudXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBjaGFuZ2UgdGhlIHZpZXcgb24gdGhlIGFwcFxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgZ29Ub0Rhc2hib2FyZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0J1dHRvbnM6IHRydWV9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbikge1xuICAgICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnTG9naW4nfSlcbiAgfVxuXG4gIGdvVG9TaWduVXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU2lnblVwJ30pXG4gIH1cblxuICBnb1RvQ291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0NvdW50ZG93bid9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IDB9KTtcbiAgIC8vIHRoaXMuZ2V0RXhlcmNpc2VzKCk7IC8vdW5jb21tZW50IHRvIGZldGNoIGZyb20gZGJcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gIH1cblxuICBnb1RvV29ya291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdXb3Jrb3V0J30pO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgZ29Ub1N1bW1hcnkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU3VtbWFyeSd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIHZhciBjdXJyZW50RGF0ZSA9IERhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0RGF0ZTogY3VycmVudERhdGV9KTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSgpO1xuICAgIH1cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXJcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCBsaXN0RXhlcmNpc2VzJylcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9nZXRBbGxFeGVyY2lzZXMnLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXRMaXN0OiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIGhhbmRsZVdvcmtvdXRTZWxlY3Rpb24oZSkge1xuXG4gICAgLy8gdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHZhciBuYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiBgL2dldEV4ZXJjaXNlLyR7bmFtZX1gLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OiBkYXRhfSlcbiAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OmV4ZXJjaXNlLnJlc3BvbnNlVGV4dH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIGdldFdvcmtvdXRIaXN0b3J5KCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2hpc3RvcnknLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIGZpcnN0Rml2ZSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpLnNsaWNlKDAsIDUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0SGlzdG9yeTogZmlyc3RGaXZlfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEV4ZXJjaXNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy93b3Jrb3V0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGVyY2lzZSBkYXRhOicsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50V29ya291dDogSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlVGV4dCl9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VuZFdvcmtvdXREYXRhKCkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYWRkV29ya291dCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICBkYXRlOiBEYXRlKCksXG4gICAgICAgIGN1cnJlbnRXb3Jrb3V0OiB0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0LFxuICAgICAgICBsZW5ndGhPZldvcmtvdXQ6IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWluc1xuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNmdWxseSBwb3N0ZWQgZGF0YSEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBsb2dpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJMb2cgaW4gc3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IHVzZXJuYW1lfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW46IHRydWV9KTtcbiAgICAgICAgICB0aGlzLmdvVG9EYXNoYm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIGFuZCBQYXNzd29yZCBJbnZhbGlkXCIpO1xuICAgICAgICAgIHRoaXMuZ29Ub0xvZ2luKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNpZ251cChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29tcGxldGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09IFwiVXNlciBDcmVhdGVkXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvU2lnblVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvZ091dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogbnVsbH0pO1xuICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIENvdW50ZG93biBhbmQgVGltZXIgRnVuY3Rpb25zXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcbiAgICB2YXIgaW50ZXJ2YWw9IHNldEludGVydmFsKHRoaXMuY291bnRkb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsOiBpbnRlcnZhbH0pO1xuICB9XG5cbiAgY291bnRkb3duKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XG4gICAgY3VycmVudC0tO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZG93biA9PT0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICAgIHRoaXMuZ29Ub1dvcmtvdXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zICogNjA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICB0aW1lcigpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPD0gMCkge1xuICAgICAgdGhpcy5nb1RvU3VtbWFyeSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50aW1lICUgNjAgPT09IDApIHtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2U7XG4gICAgICBuZXh0Kys7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IG5leHR9KTtcbiAgICAgIHRoaXMucmVmcy53b3Jrb3V0UGFnZS5oaWdobGlnaHRBY3RpdmVUaXRsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICAgIHZhciBtbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgc3MgPSBzZWNvbmRzICUgNjA7XG4gICAgaWYgKHNzIDwgMTApIHtcbiAgICAgIHNzID0gJzAnICsgc3M7XG4gICAgfVxuICAgIHJldHVybiBtbSArICc6JyArIHNzO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFJlbmRlcnMgdGhlIGNvbXBvbmVudHMgYmFzZWQgb3QgdGhlIGN1cnJlbnQgc3RhdGVcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9CZVJlbmRlcmVkID0gKCkgPT4ge1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdEYXNoYm9hcmQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPHA+IFNlbGVjdCB5b3VyIHdvcmtvdXQgPC9wPlxuICAgICAgICAgICA8RXhlcmNpc2VPcHRpb25zIGV4ZXJjaXNlcz17dGhpcy5zdGF0ZS53b3Jrb3V0TGlzdH0gaGFuZGxlV29ya291dFNlbGVjdGlvbj17dGhpcy5oYW5kbGVXb3Jrb3V0U2VsZWN0aW9ufS8+XG4gICAgICAgICAgICA8RGFzaGJvYXJkIGdvVG9Db3VudGRvd249e3RoaXMuZ29Ub0NvdW50ZG93bn0gd29ya291dEhpc3Rvcnk9e3RoaXMuc3RhdGUud29ya291dEhpc3Rvcnl9IGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufSAvPlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcblxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnTG9naW4nKSB7XG4gICAgICAgICAgcmV0dXJuICg8TG9naW4gbG9naW49e3RoaXMubG9naW59IC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1NpZ25VcCcpIHtcbiAgICAgICAgICByZXR1cm4gKDxTaWduVXAgc2lnbnVwPXt0aGlzLnNpZ251cH0gIC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0NvdW50ZG93bicpIHtcbiAgICAgICAgICByZXR1cm4gKDxDb3VudGRvd24gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnV29ya291dCcpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0lNUE9SVEFORk5GSkYnLCB7dGhpcy5zdGF0ZS5jdXJyZW50V29ya291dH0pXG4gICAgICAgIHJldHVybiAoPFdvcmtvdXQgZXhlcmNpc2U9e3RoaXMuc3RhdGUuY3VycmVudFdvcmtvdXRbdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2VdfSB0aW1lcj17dGhpcy5mb3JtYXRUaW1lKHRoaXMuc3RhdGUudGltZSl9IGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IGdvVG9TdW1tYXJ5PXt0aGlzLmdvVG9TdW1tYXJ5fSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IHJlZj1cIndvcmtvdXRQYWdlXCIgLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU3VtbWFyeScpIHtcbiAgICAgICAgcmV0dXJuICg8U3VtbWFyeSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IGN1cnJlbnRXb3Jrb3V0PXt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0fSB3b3Jrb3V0RGF0ZT17dGhpcy5zdGF0ZS53b3Jrb3V0RGF0ZX0gd29ya291dExlbmd0aEluTWlucz17dGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gLz4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICAgIDxIZWFkZXIgdXNlcm5hbWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9IGdvVG9Mb2dpbj17dGhpcy5nb1RvTG9naW59IGdvVG9TaWduVXA9e3RoaXMuZ29Ub1NpZ25VcH0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IGxvZ091dD17dGhpcy5sb2dPdXR9IHNob3dCdXR0b25zPXt0aGlzLnN0YXRlLnNob3dCdXR0b25zfS8+XG4gICAgICAgIHt0b0JlUmVuZGVyZWQoKX1cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0gLy8gRW5kIG9mIENsYXNzXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19