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

      debugger;
      // var id = e.target.getAttribute('value');
      var name = e.target.innerText;
      $.ajax({
        method: 'GET',
        url: '/getExercise/' + name,
        success: function success(exercise) {
          debugger;
          console.log(exercise);
          _this3.setState({ currentWorkout: exercise.responseText });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJ3b3Jrb3V0TGlzdCIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJnb1RvTG9naW4iLCJnb1RvU2lnblVwIiwiZ2V0V29ya291dEhpc3RvcnkiLCJzZW5kV29ya291dERhdGEiLCJsb2dPdXQiLCJsb2dpbiIsInNpZ251cCIsImhhbmRsZVdvcmtvdXRTZWxlY3Rpb24iLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsIm1ldGhvZCIsInVybCIsInN1Y2Nlc3MiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZXJyb3IiLCJlcnIiLCJlIiwibmFtZSIsInRhcmdldCIsImlubmVyVGV4dCIsImV4ZXJjaXNlIiwicmVzcG9uc2VUZXh0IiwiZGF0YVR5cGUiLCJjb21wbGV0ZSIsImZpcnN0Rml2ZSIsInNsaWNlIiwibGVuZ3RoT2ZXb3Jrb3V0IiwidHlwZSIsInN0cmluZ2lmeSIsImRhdGUiLCJjb250ZW50VHlwZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJGb3JtRGF0YSIsImdldCIsInBhc3N3b3JkIiwiYWxlcnQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJ0aW1lciIsIm5leHQiLCJyZWZzIiwid29ya291dFBhZ2UiLCJoaWdobGlnaHRBY3RpdmVUaXRsZSIsInNlY29uZHMiLCJtbSIsIk1hdGgiLCJmbG9vciIsInNzIiwidG9CZVJlbmRlcmVkIiwiZm9ybWF0VGltZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGlCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLG9CQUFjLFdBREg7QUFFWEMsc0JBQWdCQyxPQUFPQyxtQkFGWjtBQUdYQyx1QkFBaUIsQ0FITjtBQUlYQyxtQkFBYSxJQUpGO0FBS1hDLHNCQUFnQixFQUxMO0FBTVhDLGdCQUFVLElBTkM7QUFPWEMsZ0JBQVUsS0FQQztBQVFYQyxpQkFBVyxDQVJBO0FBU1hDLFlBQU0sSUFUSztBQVVYQyxtQkFBYSxJQVZGO0FBV1hDLDJCQUFxQixFQVhWO0FBWVhDLG1CQUFhO0FBWkYsS0FBYjs7QUFlQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRCxJQUFqQixPQUFuQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksU0FBTCxHQUFpQixNQUFLQSxTQUFMLENBQWVKLElBQWYsT0FBakI7QUFDQSxVQUFLSyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JMLElBQWhCLE9BQWxCO0FBQ0EsVUFBS00saUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJOLElBQXZCLE9BQXpCO0FBQ0EsVUFBS08sZUFBTCxHQUF1QixNQUFLQSxlQUFMLENBQXFCUCxJQUFyQixPQUF2QjtBQUNBLFVBQUtRLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVlSLElBQVosT0FBZDtBQUNBLFVBQUtT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RUFBbUwsZUFBZSxPQUFLQyxhQUF2TSxFQUFzTixLQUFJLGFBQTFOLEdBQVI7QUFDRDtBQUNELFlBQUksT0FBS2xCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxpQkFBUSxvQkFBQyxPQUFELElBQVMsZUFBZSxPQUFLaUIsYUFBN0IsRUFBNEMsZ0JBQWdCLE9BQUtsQixLQUFMLENBQVdFLGNBQXZFLEVBQXVGLGFBQWEsT0FBS0YsS0FBTCxDQUFXTSxXQUEvRyxFQUE0SCxxQkFBcUIsT0FBS04sS0FBTCxDQUFXYSxtQkFBNUosRUFBaUwsVUFBVSxPQUFLYixLQUFMLENBQVdTLFFBQXRNLEdBQVI7QUFDRDtBQUNGLE9BNUJEOztBQThCQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLVCxLQUFMLENBQVdRLFFBQTdCLEVBQXVDLFdBQVcsS0FBS1ksU0FBdkQsRUFBa0UsWUFBWSxLQUFLQyxVQUFuRixFQUErRixVQUFVLEtBQUtyQixLQUFMLENBQVdTLFFBQXBILEVBQThILFFBQVEsS0FBS2UsTUFBM0ksRUFBbUosYUFBYSxLQUFLeEIsS0FBTCxDQUFXWSxXQUEzSyxHQURGO0FBRUdvRTtBQUZILE9BREY7QUFPRDs7OztFQTdVZUUsTUFBTUMsUyxHQStVdEI7O0FBRUZoRixPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJyxcbiAgICAgIGN1cnJlbnRXb3Jrb3V0OiB3aW5kb3cuZXhhbXBsZUV4ZXJjaXNlRGF0YSxcbiAgICAgIGN1cnJlbnRFeGVyY2lzZTogMCxcbiAgICAgIHdvcmtvdXREYXRlOiBudWxsLFxuICAgICAgd29ya291dEhpc3Rvcnk6IFtdLFxuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICBjb3VudGRvd246IDMsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgc2hvd0J1dHRvbnM6IHRydWUsXG4gICAgICB3b3Jrb3V0TGVuZ3RoSW5NaW5zOiAxNSxcbiAgICAgIHdvcmtvdXRMaXN0OiBbXVxuICAgIH07XG5cbiAgICB0aGlzLmdvVG9Xb3Jrb3V0ID0gdGhpcy5nb1RvV29ya291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1N1bW1hcnkgPSB0aGlzLmdvVG9TdW1tYXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvQ291bnRkb3duID0gdGhpcy5nb1RvQ291bnRkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvTG9naW4gPSB0aGlzLmdvVG9Mb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1NpZ25VcCA9IHRoaXMuZ29Ub1NpZ25VcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0V29ya291dEhpc3RvcnkgPSB0aGlzLmdldFdvcmtvdXRIaXN0b3J5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kV29ya291dERhdGEgPSB0aGlzLnNlbmRXb3Jrb3V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lnbnVwID0gdGhpcy5zaWdudXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb24gPSB0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb24uYmluZCh0aGlzKTtcbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBjaGFuZ2UgdGhlIHZpZXcgb24gdGhlIGFwcFxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgZ29Ub0Rhc2hib2FyZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0J1dHRvbnM6IHRydWV9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbikge1xuICAgICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnTG9naW4nfSlcbiAgfVxuXG4gIGdvVG9TaWduVXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU2lnblVwJ30pXG4gIH1cblxuICBnb1RvQ291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0NvdW50ZG93bid9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IDB9KTtcbiAgIC8vIHRoaXMuZ2V0RXhlcmNpc2VzKCk7IC8vdW5jb21tZW50IHRvIGZldGNoIGZyb20gZGJcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gIH1cblxuICBnb1RvV29ya291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdXb3Jrb3V0J30pO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgZ29Ub1N1bW1hcnkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU3VtbWFyeSd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIHZhciBjdXJyZW50RGF0ZSA9IERhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0RGF0ZTogY3VycmVudERhdGV9KTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSgpO1xuICAgIH1cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXJcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NhbGxlZCBsaXN0RXhlcmNpc2VzJylcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy9nZXRBbGxFeGVyY2lzZXMnLFxuICAgICAgc3VjY2VzczogKGRhdGEpID0+IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXRMaXN0OiBkYXRhfSk7XG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIGhhbmRsZVdvcmtvdXRTZWxlY3Rpb24oZSkge1xuICAgIGRlYnVnZ2VyXG4gICAgLy8gdmFyIGlkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgIHZhciBuYW1lID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiBgL2dldEV4ZXJjaXNlLyR7bmFtZX1gLFxuICAgICAgc3VjY2VzczogKGV4ZXJjaXNlKSA9PiB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGNvbnNvbGUubG9nKGV4ZXJjaXNlKTtcbiAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OmV4ZXJjaXNlLnJlc3BvbnNlVGV4dH0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIGdldFdvcmtvdXRIaXN0b3J5KCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2hpc3RvcnknLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIGZpcnN0Rml2ZSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpLnNsaWNlKDAsIDUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0SGlzdG9yeTogZmlyc3RGaXZlfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEV4ZXJjaXNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy93b3Jrb3V0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGVyY2lzZSBkYXRhOicsIGRhdGEpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OiBKU09OLnBhcnNlKGRhdGEucmVzcG9uc2VUZXh0KX0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZW5kV29ya291dERhdGEoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hZGRXb3Jrb3V0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgIGRhdGU6IERhdGUoKSxcbiAgICAgICAgY3VycmVudFdvcmtvdXQ6IHRoaXMuc3RhdGUuY3VycmVudFdvcmtvdXQsXG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bGx5IHBvc3RlZCBkYXRhIScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGxvZ2luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbXBsZXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VUZXh0ID09PSBcIkxvZyBpbiBzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvTG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJVc2VyIENyZWF0ZWRcIikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB1c2VybmFtZX0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiB0cnVlfSk7XG4gICAgICAgICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJVc2VybmFtZSBhbmQgUGFzc3dvcmQgSW52YWxpZFwiKTtcbiAgICAgICAgICB0aGlzLmdvVG9TaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9nT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBudWxsfSk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgQ291bnRkb3duIGFuZCBUaW1lciBGdW5jdGlvbnNcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogM30pO1xuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudGRvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICBjb3VudGRvd24oKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmNvdW50ZG93bjtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRkb3duOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnRkb3duID09PSAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgICAgdGhpcy5nb1RvV29ya291dCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnMgKiA2MDtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aW1lci5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbDogaW50ZXJ2YWx9KTtcbiAgfVxuXG4gIHRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS50aW1lO1xuICAgIGN1cnJlbnQtLTtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA8PSAwKSB7XG4gICAgICB0aGlzLmdvVG9TdW1tYXJ5KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRpbWUgJSA2MCA9PT0gMCkge1xuICAgICAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLmN1cnJlbnRFeGVyY2lzZTtcbiAgICAgIG5leHQrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRFeGVyY2lzZTogbmV4dH0pO1xuICAgICAgdGhpcy5yZWZzLndvcmtvdXRQYWdlLmhpZ2hsaWdodEFjdGl2ZVRpdGxlKCk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VGltZShzZWNvbmRzKSB7XG4gICAgdmFyIG1tID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIHZhciBzcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoc3MgPCAxMCkge1xuICAgICAgc3MgPSAnMCcgKyBzcztcbiAgICB9XG4gICAgcmV0dXJuIG1tICsgJzonICsgc3M7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgUmVuZGVycyB0aGUgY29tcG9uZW50cyBiYXNlZCBvdCB0aGUgY3VycmVudCBzdGF0ZVxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b0JlUmVuZGVyZWQgPSAoKSA9PiB7XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0Rhc2hib2FyZCcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICA8cD4gU2VsZWN0IHlvdXIgd29ya291dCA8L3A+XG4gICAgICAgICAgIDxFeGVyY2lzZU9wdGlvbnMgZXhlcmNpc2VzPXt0aGlzLnN0YXRlLndvcmtvdXRMaXN0fSBoYW5kbGVXb3Jrb3V0U2VsZWN0aW9uPXt0aGlzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb259Lz5cbiAgICAgICAgICAgIDxEYXNoYm9hcmQgZ29Ub0NvdW50ZG93bj17dGhpcy5nb1RvQ291bnRkb3dufSB3b3Jrb3V0SGlzdG9yeT17dGhpcy5zdGF0ZS53b3Jrb3V0SGlzdG9yeX0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IC8+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuXG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdMb2dpbicpIHtcbiAgICAgICAgICByZXR1cm4gKDxMb2dpbiBsb2dpbj17dGhpcy5sb2dpbn0gLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU2lnblVwJykge1xuICAgICAgICAgIHJldHVybiAoPFNpZ25VcCBzaWdudXA9e3RoaXMuc2lnbnVwfSAgLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnQ291bnRkb3duJykge1xuICAgICAgICAgIHJldHVybiAoPENvdW50ZG93biBjb3VudGRvd249e3RoaXMuc3RhdGUuY291bnRkb3dufSAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdXb3Jrb3V0Jykge1xuICAgICAgICByZXR1cm4gKDxXb3Jrb3V0IGV4ZXJjaXNlPXt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0W3RoaXMuc3RhdGUuY3VycmVudEV4ZXJjaXNlXX0gdGltZXI9e3RoaXMuZm9ybWF0VGltZSh0aGlzLnN0YXRlLnRpbWUpfSBjb3VudGRvd249e3RoaXMuc3RhdGUuY291bnRkb3dufSBnb1RvU3VtbWFyeT17dGhpcy5nb1RvU3VtbWFyeX0gZ29Ub0Rhc2hib2FyZD17dGhpcy5nb1RvRGFzaGJvYXJkfSByZWY9XCJ3b3Jrb3V0UGFnZVwiIC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1N1bW1hcnknKSB7XG4gICAgICAgIHJldHVybiAoPFN1bW1hcnkgZ29Ub0Rhc2hib2FyZD17dGhpcy5nb1RvRGFzaGJvYXJkfSBjdXJyZW50V29ya291dD17dGhpcy5zdGF0ZS5jdXJyZW50V29ya291dH0gd29ya291dERhdGU9e3RoaXMuc3RhdGUud29ya291dERhdGV9IHdvcmtvdXRMZW5ndGhJbk1pbnM9e3RoaXMuc3RhdGUud29ya291dExlbmd0aEluTWluc30gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IC8+KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkFwcFwiPlxuICAgICAgICA8SGVhZGVyIHVzZXJuYW1lPXt0aGlzLnN0YXRlLnVzZXJuYW1lfSBnb1RvTG9naW49e3RoaXMuZ29Ub0xvZ2lufSBnb1RvU2lnblVwPXt0aGlzLmdvVG9TaWduVXB9IGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufSBsb2dPdXQ9e3RoaXMubG9nT3V0fSBzaG93QnV0dG9ucz17dGhpcy5zdGF0ZS5zaG93QnV0dG9uc30vPlxuICAgICAgICB7dG9CZVJlbmRlcmVkKCl9XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG59IC8vIEVuZCBvZiBDbGFzc1xuXG53aW5kb3cuQXBwID0gQXBwOyJdfQ==