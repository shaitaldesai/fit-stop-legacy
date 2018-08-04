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
    _this.listExercises = _this.listExercises.bind(_this);

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
    key: 'listExercises',
    value: function listExercises() {
      var _this2 = this;

      $.ajax({
        method: 'GET',
        url: '/getAllExercises',
        success: function success(data) {
          console.log(data);
          _this2.setState({ workoutList: data });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getWorkoutHistory',
    value: function getWorkoutHistory() {
      var _this3 = this;

      $.ajax({
        method: 'GET',
        url: '/history',
        dataType: 'json',
        data: {
          username: this.state.username
        },
        complete: function complete(data) {
          var firstFive = JSON.parse(data.responseText).slice(0, 5);
          _this3.setState({ workoutHistory: firstFive });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getExercises',
    value: function getExercises() {
      var _this4 = this;

      $.ajax({
        method: 'GET',
        url: '/workout',
        dataType: 'json',
        data: {
          lengthOfWorkout: this.state.workoutLengthInMins
        },
        complete: function complete(data) {
          console.log('exercise data:', data);
          _this4.setState({ currentWorkout: JSON.parse(data.responseText) });
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
      var _this5 = this;

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
            _this5.setState({ username: username });
            _this5.setState({ loggedIn: true });
            _this5.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this5.goToLogin();
          }
        }
      });
    }
  }, {
    key: 'signup',
    value: function signup(event) {
      var _this6 = this;

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
            _this6.setState({ username: username });
            _this6.setState({ loggedIn: true });
            _this6.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this6.goToSignUp();
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
      var _this7 = this;

      var toBeRendered = function toBeRendered() {

        if (_this7.state.currentState === 'Dashboard') {
          return React.createElement(
            'div',
            null,
            React.createElement(Dashboard, { goToCountdown: _this7.goToCountdown, workoutHistory: _this7.state.workoutHistory, loggedIn: _this7.state.loggedIn }),
            _this7.state.workoutList
          );
        }
        if (_this7.state.currentState === 'Login') {
          return React.createElement(Login, { login: _this7.login });
        }
        if (_this7.state.currentState === 'SignUp') {
          return React.createElement(SignUp, { signup: _this7.signup });
        }
        if (_this7.state.currentState === 'Countdown') {
          return React.createElement(Countdown, { countdown: _this7.state.countdown });
        }
        if (_this7.state.currentState === 'Workout') {
          return React.createElement(Workout, { exercise: _this7.state.currentWorkout[_this7.state.currentExercise], timer: _this7.formatTime(_this7.state.time), countdown: _this7.state.countdown, goToSummary: _this7.goToSummary, goToDashboard: _this7.goToDashboard, ref: 'workoutPage' });
        }
        if (_this7.state.currentState === 'Summary') {
          return React.createElement(Summary, { goToDashboard: _this7.goToDashboard, currentWorkout: _this7.state.currentWorkout, workoutDate: _this7.state.workoutDate, workoutLengthInMins: _this7.state.workoutLengthInMins, loggedIn: _this7.state.loggedIn });
        }
      };

      return React.createElement(
        'div',
        { className: 'App' },
        this.listExercises(),
        React.createElement(Header, { username: this.state.username, goToLogin: this.goToLogin, goToSignUp: this.goToSignUp, loggedIn: this.state.loggedIn, logOut: this.logOut, showButtons: this.state.showButtons }),
        toBeRendered()
      );
    }
  }]);

  return App;
}(React.Component); // End of Class

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJ3b3Jrb3V0TGlzdCIsImdvVG9Xb3Jrb3V0IiwiYmluZCIsImdvVG9TdW1tYXJ5IiwiZ29Ub0Rhc2hib2FyZCIsImdvVG9Db3VudGRvd24iLCJnb1RvTG9naW4iLCJnb1RvU2lnblVwIiwiZ2V0V29ya291dEhpc3RvcnkiLCJzZW5kV29ya291dERhdGEiLCJsb2dPdXQiLCJsb2dpbiIsInNpZ251cCIsImxpc3RFeGVyY2lzZXMiLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwic3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJlcnIiLCJkYXRhVHlwZSIsImNvbXBsZXRlIiwiZmlyc3RGaXZlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0Iiwic2xpY2UiLCJsZW5ndGhPZldvcmtvdXQiLCJ0eXBlIiwic3RyaW5naWZ5IiwiZGF0ZSIsImNvbnRlbnRUeXBlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicGFzc3dvcmQiLCJhbGVydCIsInNldEludGVydmFsIiwiY3VycmVudCIsInRpbWVyIiwibmV4dCIsInJlZnMiLCJ3b3Jrb3V0UGFnZSIsImhpZ2hsaWdodEFjdGl2ZVRpdGxlIiwic2Vjb25kcyIsIm1tIiwiTWF0aCIsImZsb29yIiwic3MiLCJ0b0JlUmVuZGVyZWQiLCJmb3JtYXRUaW1lIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsV0FESDtBQUVYQyxzQkFBZ0JDLE9BQU9DLG1CQUZaO0FBR1hDLHVCQUFpQixDQUhOO0FBSVhDLG1CQUFhLElBSkY7QUFLWEMsc0JBQWdCLEVBTEw7QUFNWEMsZ0JBQVUsSUFOQztBQU9YQyxnQkFBVSxLQVBDO0FBUVhDLGlCQUFXLENBUkE7QUFTWEMsWUFBTSxJQVRLO0FBVVhDLG1CQUFhLElBVkY7QUFXWEMsMkJBQXFCLEVBWFY7QUFZWEMsbUJBQWE7QUFaRixLQUFiOztBQWVBLFVBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFDQSxVQUFLQyxXQUFMLEdBQW1CLE1BQUtBLFdBQUwsQ0FBaUJELElBQWpCLE9BQW5CO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxVQUFLSSxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUosSUFBZixPQUFqQjtBQUNBLFVBQUtLLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkwsSUFBaEIsT0FBbEI7QUFDQSxVQUFLTSxpQkFBTCxHQUF5QixNQUFLQSxpQkFBTCxDQUF1Qk4sSUFBdkIsT0FBekI7QUFDQSxVQUFLTyxlQUFMLEdBQXVCLE1BQUtBLGVBQUwsQ0FBcUJQLElBQXJCLE9BQXZCO0FBQ0EsVUFBS1EsTUFBTCxHQUFjLE1BQUtBLE1BQUwsQ0FBWVIsSUFBWixPQUFkO0FBQ0EsVUFBS1MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV1QsSUFBWCxPQUFiO0FBQ0Es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QUFLZSxNQUEzSSxFQUFtSixhQUFhLEtBQUt4QixLQUFMLENBQVdZLFdBQTNLLEdBRkY7QUFHR2dFO0FBSEgsT0FERjtBQVFEOzs7O0VBdlRlRSxNQUFNQyxTLEdBeVR0Qjs7QUFFRjVFLE9BQU9KLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnLFxuICAgICAgY3VycmVudFdvcmtvdXQ6IHdpbmRvdy5leGFtcGxlRXhlcmNpc2VEYXRhLFxuICAgICAgY3VycmVudEV4ZXJjaXNlOiAwLFxuICAgICAgd29ya291dERhdGU6IG51bGwsXG4gICAgICB3b3Jrb3V0SGlzdG9yeTogW10sXG4gICAgICB1c2VybmFtZTogbnVsbCxcbiAgICAgIGxvZ2dlZEluOiBmYWxzZSxcbiAgICAgIGNvdW50ZG93bjogMyxcbiAgICAgIHRpbWU6IG51bGwsXG4gICAgICBzaG93QnV0dG9uczogdHJ1ZSxcbiAgICAgIHdvcmtvdXRMZW5ndGhJbk1pbnM6IDE1LFxuICAgICAgd29ya291dExpc3Q6IFtdXG4gICAgfTtcblxuICAgIHRoaXMuZ29Ub1dvcmtvdXQgPSB0aGlzLmdvVG9Xb3Jrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU3VtbWFyeSA9IHRoaXMuZ29Ub1N1bW1hcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9EYXNoYm9hcmQgPSB0aGlzLmdvVG9EYXNoYm9hcmQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Db3VudGRvd24gPSB0aGlzLmdvVG9Db3VudGRvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLmdvVG9Mb2dpbiA9IHRoaXMuZ29Ub0xvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvU2lnblVwID0gdGhpcy5nb1RvU2lnblVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSA9IHRoaXMuZ2V0V29ya291dEhpc3RvcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSA9IHRoaXMuc2VuZFdvcmtvdXREYXRhLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dPdXQgPSB0aGlzLmxvZ091dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW4gPSB0aGlzLmxvZ2luLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaWdudXAgPSB0aGlzLnNpZ251cC5iaW5kKHRoaXMpO1xuICAgIHRoaXMubGlzdEV4ZXJjaXNlcz0gdGhpcy5saXN0RXhlcmNpc2VzLmJpbmQodGhpcyk7XG5cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBjaGFuZ2UgdGhlIHZpZXcgb24gdGhlIGFwcFxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgZ29Ub0Rhc2hib2FyZCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdEYXNoYm9hcmQnfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd0J1dHRvbnM6IHRydWV9KTtcbiAgICBpZiAodGhpcy5zdGF0ZS5sb2dnZWRJbikge1xuICAgICAgdGhpcy5nZXRXb3Jrb3V0SGlzdG9yeSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zdGF0ZS5pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICB9XG4gIH1cblxuICBnb1RvTG9naW4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnTG9naW4nfSlcbiAgfVxuXG4gIGdvVG9TaWduVXAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU2lnblVwJ30pXG4gIH1cblxuICBnb1RvQ291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0NvdW50ZG93bid9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IDB9KTtcbiAgIC8vIHRoaXMuZ2V0RXhlcmNpc2VzKCk7IC8vdW5jb21tZW50IHRvIGZldGNoIGZyb20gZGJcbiAgICB0aGlzLnN0YXJ0Q291bnRkb3duKCk7XG4gIH1cblxuICBnb1RvV29ya291dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdXb3Jrb3V0J30pO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgZ29Ub1N1bW1hcnkoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnU3VtbWFyeSd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIHZhciBjdXJyZW50RGF0ZSA9IERhdGUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0RGF0ZTogY3VycmVudERhdGV9KTtcbiAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLnNlbmRXb3Jrb3V0RGF0YSgpO1xuICAgIH1cbiAgfVxuXG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBUaGUgZm9sbG93aW5nIGZ1bmN0aW9ucyBzZW5kIHJlcXVlc3RzIHRvIHRoZSBzZXJ2ZXJcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIGxpc3RFeGVyY2lzZXMoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvZ2V0QWxsRXhlcmNpc2VzJyxcbiAgICAgIHN1Y2Nlc3M6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0TGlzdDogZGF0YX0pO1xuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIGdldFdvcmtvdXRIaXN0b3J5KCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL2hpc3RvcnknLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWVcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgdmFyIGZpcnN0Rml2ZSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpLnNsaWNlKDAsIDUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3b3Jrb3V0SGlzdG9yeTogZmlyc3RGaXZlfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldEV4ZXJjaXNlcygpIHtcbiAgICAkLmFqYXgoe1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIHVybDogJy93b3Jrb3V0JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGVyY2lzZSBkYXRhOicsIGRhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50V29ya291dDogSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlVGV4dCl9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2VuZFdvcmtvdXREYXRhKCkge1xuICAgICQuYWpheCh7XG4gICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICB1cmw6ICcvYWRkV29ya291dCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgICBkYXRlOiBEYXRlKCksXG4gICAgICAgIGN1cnJlbnRXb3Jrb3V0OiB0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0LFxuICAgICAgICBsZW5ndGhPZldvcmtvdXQ6IHRoaXMuc3RhdGUud29ya291dExlbmd0aEluTWluc1xuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNmdWxseSBwb3N0ZWQgZGF0YSEnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBsb2dpbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL2xvZ2luJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJMb2cgaW4gc3VjY2Vzc1wiKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IHVzZXJuYW1lfSk7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW46IHRydWV9KTtcbiAgICAgICAgICB0aGlzLmdvVG9EYXNoYm9hcmQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIlVzZXJuYW1lIGFuZCBQYXNzd29yZCBJbnZhbGlkXCIpO1xuICAgICAgICAgIHRoaXMuZ29Ub0xvZ2luKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNpZ251cChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShldmVudC50YXJnZXQpO1xuICAgIHZhciB1c2VybmFtZSA9IGRhdGEuZ2V0KCd1c2VybmFtZScpO1xuICAgIHZhciBwYXNzd29yZCA9IGRhdGEuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgdXJsOiAnL3NpZ251cCcsXG4gICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgY29tcGxldGU6IGRhdGEgPT4ge1xuICAgICAgICBpZiAoZGF0YS5yZXNwb25zZVRleHQgPT09IFwiVXNlciBDcmVhdGVkXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvU2lnblVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGxvZ091dCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogZmFsc2V9KTtcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogbnVsbH0pO1xuICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIENvdW50ZG93biBhbmQgVGltZXIgRnVuY3Rpb25zXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICBzdGFydENvdW50ZG93bigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjb3VudGRvd246IDN9KTtcbiAgICB2YXIgaW50ZXJ2YWw9IHNldEludGVydmFsKHRoaXMuY291bnRkb3duLmJpbmQodGhpcyksIDEwMDApO1xuICAgIHRoaXMuc2V0U3RhdGUoe2ludGVydmFsOiBpbnRlcnZhbH0pO1xuICB9XG5cbiAgY291bnRkb3duKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS5jb3VudGRvd247XG4gICAgY3VycmVudC0tO1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZG93biA9PT0gMCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsKTtcbiAgICAgIHRoaXMuZ29Ub1dvcmtvdXQoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydFRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zICogNjA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKHRoaXMudGltZXIuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICB0aW1lcigpIHtcbiAgICB2YXIgY3VycmVudCA9IHRoaXMuc3RhdGUudGltZTtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogY3VycmVudH0pO1xuICAgIGlmICh0aGlzLnN0YXRlLnRpbWUgPD0gMCkge1xuICAgICAgdGhpcy5nb1RvU3VtbWFyeSgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50aW1lICUgNjAgPT09IDApIHtcbiAgICAgIHZhciBuZXh0ID0gdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2U7XG4gICAgICBuZXh0Kys7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50RXhlcmNpc2U6IG5leHR9KTtcbiAgICAgIHRoaXMucmVmcy53b3Jrb3V0UGFnZS5oaWdobGlnaHRBY3RpdmVUaXRsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZvcm1hdFRpbWUoc2Vjb25kcykge1xuICAgIHZhciBtbSA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcbiAgICB2YXIgc3MgPSBzZWNvbmRzICUgNjA7XG4gICAgaWYgKHNzIDwgMTApIHtcbiAgICAgIHNzID0gJzAnICsgc3M7XG4gICAgfVxuICAgIHJldHVybiBtbSArICc6JyArIHNzO1xuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFJlbmRlcnMgdGhlIGNvbXBvbmVudHMgYmFzZWQgb3QgdGhlIGN1cnJlbnQgc3RhdGVcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgdG9CZVJlbmRlcmVkID0gKCkgPT4ge1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdEYXNoYm9hcmQnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxEYXNoYm9hcmQgZ29Ub0NvdW50ZG93bj17dGhpcy5nb1RvQ291bnRkb3dufSB3b3Jrb3V0SGlzdG9yeT17dGhpcy5zdGF0ZS53b3Jrb3V0SGlzdG9yeX0gbG9nZ2VkSW49e3RoaXMuc3RhdGUubG9nZ2VkSW59IC8+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUud29ya291dExpc3QgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG5cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0xvZ2luJykge1xuICAgICAgICAgIHJldHVybiAoPExvZ2luIGxvZ2luPXt0aGlzLmxvZ2lufSAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdTaWduVXAnKSB7XG4gICAgICAgICAgcmV0dXJuICg8U2lnblVwIHNpZ251cD17dGhpcy5zaWdudXB9ICAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdDb3VudGRvd24nKSB7XG4gICAgICAgICAgcmV0dXJuICg8Q291bnRkb3duIGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1dvcmtvdXQnKSB7XG4gICAgICAgIHJldHVybiAoPFdvcmtvdXQgZXhlcmNpc2U9e3RoaXMuc3RhdGUuY3VycmVudFdvcmtvdXRbdGhpcy5zdGF0ZS5jdXJyZW50RXhlcmNpc2VdfSB0aW1lcj17dGhpcy5mb3JtYXRUaW1lKHRoaXMuc3RhdGUudGltZSl9IGNvdW50ZG93bj17dGhpcy5zdGF0ZS5jb3VudGRvd259IGdvVG9TdW1tYXJ5PXt0aGlzLmdvVG9TdW1tYXJ5fSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IHJlZj1cIndvcmtvdXRQYWdlXCIgLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnU3VtbWFyeScpIHtcbiAgICAgICAgcmV0dXJuICg8U3VtbWFyeSBnb1RvRGFzaGJvYXJkPXt0aGlzLmdvVG9EYXNoYm9hcmR9IGN1cnJlbnRXb3Jrb3V0PXt0aGlzLnN0YXRlLmN1cnJlbnRXb3Jrb3V0fSB3b3Jrb3V0RGF0ZT17dGhpcy5zdGF0ZS53b3Jrb3V0RGF0ZX0gd29ya291dExlbmd0aEluTWlucz17dGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gLz4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwiQXBwXCI+XG4gICAgICB7IHRoaXMubGlzdEV4ZXJjaXNlcygpIH1cbiAgICAgICAgPEhlYWRlciB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gZ29Ub0xvZ2luPXt0aGlzLmdvVG9Mb2dpbn0gZ29Ub1NpZ25VcD17dGhpcy5nb1RvU2lnblVwfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gbG9nT3V0PXt0aGlzLmxvZ091dH0gc2hvd0J1dHRvbnM9e3RoaXMuc3RhdGUuc2hvd0J1dHRvbnN9Lz5cbiAgICAgICAge3RvQmVSZW5kZXJlZCgpfVxuXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufSAvLyBFbmQgb2YgQ2xhc3Ncblxud2luZG93LkFwcCA9IEFwcDsiXX0=