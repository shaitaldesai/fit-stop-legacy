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
      workoutLengthInMins: 15
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
    key: 'getWorkoutHistory',
    value: function getWorkoutHistory() {
      var _this2 = this;

      $.ajax({
        method: 'GET',
        url: '/history',
        dataType: 'json',
        data: {
          username: this.state.username
        },
        complete: function complete(data) {
          var firstFive = JSON.parse(data.responseText).slice(0, 5);
          _this2.setState({ workoutHistory: firstFive });
        },
        error: function error(err) {
          console.error(err);
        }
      });
    }
  }, {
    key: 'getExercises',
    value: function getExercises() {
      var _this3 = this;

      $.ajax({
        method: 'GET',
        url: '/workout',
        dataType: 'json',
        data: {
          lengthOfWorkout: this.state.workoutLengthInMins
        },
        complete: function complete(data) {
          console.log('exercise data:', data);
          _this3.setState({ currentWorkout: JSON.parse(data.responseText) });
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
      var _this4 = this;

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
            _this4.setState({ username: username });
            _this4.setState({ loggedIn: true });
            _this4.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this4.goToLogin();
          }
        }
      });
    }
  }, {
    key: 'signup',
    value: function signup(event) {
      var _this5 = this;

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
            _this5.setState({ username: username });
            _this5.setState({ loggedIn: true });
            _this5.goToDashboard();
          } else {
            alert("Username and Password Invalid");
            _this5.goToSignUp();
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
      var _this6 = this;

      var toBeRendered = function toBeRendered() {
        if (_this6.state.currentState === 'Dashboard') {
          return React.createElement(Dashboard, { goToCountdown: _this6.goToCountdown, workoutHistory: _this6.state.workoutHistory, loggedIn: _this6.state.loggedIn });
        }
        if (_this6.state.currentState === 'Login') {
          return React.createElement(Login, { login: _this6.login });
        }
        if (_this6.state.currentState === 'SignUp') {
          return React.createElement(SignUp, { signup: _this6.signup });
        }
        if (_this6.state.currentState === 'Countdown') {
          return React.createElement(Countdown, { countdown: _this6.state.countdown });
        }
        if (_this6.state.currentState === 'Workout') {
          return React.createElement(Workout, { exercise: _this6.state.currentWorkout[_this6.state.currentExercise], timer: _this6.formatTime(_this6.state.time), countdown: _this6.state.countdown, goToSummary: _this6.goToSummary, goToDashboard: _this6.goToDashboard, ref: 'workoutPage' });
        }
        if (_this6.state.currentState === 'Summary') {
          return React.createElement(Summary, { goToDashboard: _this6.goToDashboard, currentWorkout: _this6.state.currentWorkout, workoutDate: _this6.state.workoutDate, workoutLengthInMins: _this6.state.workoutLengthInMins, loggedIn: _this6.state.loggedIn });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwic3RhdGUiLCJjdXJyZW50U3RhdGUiLCJjdXJyZW50V29ya291dCIsIndpbmRvdyIsImV4YW1wbGVFeGVyY2lzZURhdGEiLCJjdXJyZW50RXhlcmNpc2UiLCJ3b3Jrb3V0RGF0ZSIsIndvcmtvdXRIaXN0b3J5IiwidXNlcm5hbWUiLCJsb2dnZWRJbiIsImNvdW50ZG93biIsInRpbWUiLCJzaG93QnV0dG9ucyIsIndvcmtvdXRMZW5ndGhJbk1pbnMiLCJnb1RvV29ya291dCIsImJpbmQiLCJnb1RvU3VtbWFyeSIsImdvVG9EYXNoYm9hcmQiLCJnb1RvQ291bnRkb3duIiwiZ29Ub0xvZ2luIiwiZ29Ub1NpZ25VcCIsImdldFdvcmtvdXRIaXN0b3J5Iiwic2VuZFdvcmtvdXREYXRhIiwibG9nT3V0IiwibG9naW4iLCJzaWdudXAiLCJzZXRTdGF0ZSIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInN0YXJ0Q291bnRkb3duIiwic3RhcnRUaW1lciIsImN1cnJlbnREYXRlIiwiRGF0ZSIsIiQiLCJhamF4IiwibWV0aG9kIiwidXJsIiwiZGF0YVR5cGUiLCJkYXRhIiwiY29tcGxldGUiLCJmaXJzdEZpdmUiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzbGljZSIsImVycm9yIiwiZXJyIiwiY29uc29sZSIsImxlbmd0aE9mV29ya291dCIsImxvZyIsInR5cGUiLCJzdHJpbmdpZnkiLCJkYXRlIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwidGFyZ2V0IiwiZ2V0IiwicGFzc3dvcmQiLCJhbGVydCIsInNldEludGVydmFsIiwiY3VycmVudCIsInRpbWVyIiwibmV4dCIsInJlZnMiLCJ3b3Jrb3V0UGFnZSIsImhpZ2hsaWdodEFjdGl2ZVRpdGxlIiwic2Vjb25kcyIsIm1tIiwiTWF0aCIsImZsb29y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QUFzTixLQUFJLGFBQTFOLEdBQVI7QUFDRDtBQUNELFlBQUksT0FBS2pCLEtBQUwsQ0FBV0MsWUFBWCxLQUE0QixTQUFoQyxFQUEyQztBQUN6QyxpQkFBUSxvQkFBQyxPQUFELElBQVMsZUFBZSxPQUFLZ0IsYUFBN0IsRUFBNEMsZ0JBQWdCLE9BQUtqQixLQUFMLENBQVdFLGNBQXZFLEVBQXVGLGFBQWEsT0FBS0YsS0FBTCxDQUFXTSxXQUEvRyxFQUE0SCxxQkFBcUIsT0FBS04sS0FBTCxDQUFXYSxtQkFBNUosRUFBaUwsVUFBVSxPQUFLYixLQUFMLENBQVdTLFFBQXRNLEdBQVI7QUFDRDtBQUNGLE9BbkJEOztBQXFCQSxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVksS0FBakI7QUFDRSw0QkFBQyxNQUFELElBQVEsVUFBVSxLQUFLVCxLQUFMLENBQVdRLFFBQTdCLEVBQXVDLFdBQVcsS0FBS1csU0FBdkQsRUFBa0UsWUFBWSxLQUFLQyxVQUFuRixFQUErRixVQUFVLEtBQUtwQixLQUFMLENBQVdTLFFBQXBILEVBQThILFFBQVEsS0FBS2MsTUFBM0ksRUFBbUosYUFBYSxLQUFLdkIsS0FBTCxDQUFXWSxXQUEzSyxHQURGO0FBRUc4RDtBQUZILE9BREY7QUFNRDs7OztFQTVSZUUsTUFBTUMsUyxHQThSdEI7O0FBRUYxRSxPQUFPSixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY3VycmVudFN0YXRlOiAnRGFzaGJvYXJkJyxcbiAgICAgIGN1cnJlbnRXb3Jrb3V0OiB3aW5kb3cuZXhhbXBsZUV4ZXJjaXNlRGF0YSxcbiAgICAgIGN1cnJlbnRFeGVyY2lzZTogMCxcbiAgICAgIHdvcmtvdXREYXRlOiBudWxsLFxuICAgICAgd29ya291dEhpc3Rvcnk6IFtdLFxuICAgICAgdXNlcm5hbWU6IG51bGwsXG4gICAgICBsb2dnZWRJbjogZmFsc2UsXG4gICAgICBjb3VudGRvd246IDMsXG4gICAgICB0aW1lOiBudWxsLFxuICAgICAgc2hvd0J1dHRvbnM6IHRydWUsXG4gICAgICB3b3Jrb3V0TGVuZ3RoSW5NaW5zOiAxNVxuICAgIH07XG5cbiAgICB0aGlzLmdvVG9Xb3Jrb3V0ID0gdGhpcy5nb1RvV29ya291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1N1bW1hcnkgPSB0aGlzLmdvVG9TdW1tYXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkID0gdGhpcy5nb1RvRGFzaGJvYXJkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvQ291bnRkb3duID0gdGhpcy5nb1RvQ291bnRkb3duLmJpbmQodGhpcyk7XG4gICAgdGhpcy5nb1RvTG9naW4gPSB0aGlzLmdvVG9Mb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ29Ub1NpZ25VcCA9IHRoaXMuZ29Ub1NpZ25VcC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0V29ya291dEhpc3RvcnkgPSB0aGlzLmdldFdvcmtvdXRIaXN0b3J5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kV29ya291dERhdGEgPSB0aGlzLnNlbmRXb3Jrb3V0RGF0YS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9nT3V0ID0gdGhpcy5sb2dPdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luID0gdGhpcy5sb2dpbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lnbnVwID0gdGhpcy5zaWdudXAuYmluZCh0aGlzKTtcblxuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIGNoYW5nZSB0aGUgdmlldyBvbiB0aGUgYXBwXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICBnb1RvRGFzaGJvYXJkKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ0Rhc2hib2FyZCd9KTtcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93QnV0dG9uczogdHJ1ZX0pO1xuICAgIGlmICh0aGlzLnN0YXRlLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmdldFdvcmtvdXRIaXN0b3J5KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRlLmludGVydmFsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfVxuXG4gIGdvVG9Mb2dpbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdMb2dpbid9KVxuICB9XG5cbiAgZ29Ub1NpZ25VcCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTaWduVXAnfSlcbiAgfVxuXG4gIGdvVG9Db3VudGRvd24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFN0YXRlOiAnQ291bnRkb3duJ30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dCdXR0b25zOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRFeGVyY2lzZTogMH0pO1xuICAgLy8gdGhpcy5nZXRFeGVyY2lzZXMoKTsgLy91bmNvbW1lbnQgdG8gZmV0Y2ggZnJvbSBkYlxuICAgIHRoaXMuc3RhcnRDb3VudGRvd24oKTtcbiAgfVxuXG4gIGdvVG9Xb3Jrb3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRTdGF0ZTogJ1dvcmtvdXQnfSk7XG4gICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gIH1cblxuICBnb1RvU3VtbWFyeSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50U3RhdGU6ICdTdW1tYXJ5J30pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dCdXR0b25zOiB0cnVlfSk7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gRGF0ZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXREYXRlOiBjdXJyZW50RGF0ZX0pO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0ZS5pbnRlcnZhbCk7XG4gICAgaWYgKHRoaXMuc3RhdGUubG9nZ2VkSW4pIHtcbiAgICAgIHRoaXMuc2VuZFdvcmtvdXREYXRhKCk7XG4gICAgfVxuICB9XG5cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqXG4gIFRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zIHNlbmQgcmVxdWVzdHMgdG8gdGhlIHNlcnZlclxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgZ2V0V29ya291dEhpc3RvcnkoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB1cmw6ICcvaGlzdG9yeScsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZVxuICAgICAgfSxcbiAgICAgIGNvbXBsZXRlOiAoZGF0YSkgPT4ge1xuICAgICAgICB2YXIgZmlyc3RGaXZlID0gSlNPTi5wYXJzZShkYXRhLnJlc3BvbnNlVGV4dCkuc2xpY2UoMCwgNSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dvcmtvdXRIaXN0b3J5OiBmaXJzdEZpdmV9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXhlcmNpc2VzKCkge1xuICAgICQuYWpheCh7XG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgdXJsOiAnL3dvcmtvdXQnLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGVuZ3RoT2ZXb3Jrb3V0OiB0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnNcbiAgICAgIH0sXG4gICAgICBjb21wbGV0ZTogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2V4ZXJjaXNlIGRhdGE6JywgZGF0YSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRXb3Jrb3V0OiBKU09OLnBhcnNlKGRhdGEucmVzcG9uc2VUZXh0KX0pXG4gICAgICB9LFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZW5kV29ya291dERhdGEoKSB7XG4gICAgJC5hamF4KHtcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIHVybDogJy9hZGRXb3Jrb3V0JyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgIGRhdGU6IERhdGUoKSxcbiAgICAgICAgY3VycmVudFdvcmtvdXQ6IHRoaXMuc3RhdGUuY3VycmVudFdvcmtvdXQsXG4gICAgICAgIGxlbmd0aE9mV29ya291dDogdGhpcy5zdGF0ZS53b3Jrb3V0TGVuZ3RoSW5NaW5zXG4gICAgICB9KSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc2Z1bGx5IHBvc3RlZCBkYXRhIScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGxvZ2luKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvbG9naW4nLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUsXG4gICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgfSksXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgIGNvbXBsZXRlOiBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucmVzcG9uc2VUZXh0ID09PSBcIkxvZyBpbiBzdWNjZXNzXCIpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogdXNlcm5hbWV9KTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJbjogdHJ1ZX0pO1xuICAgICAgICAgIHRoaXMuZ29Ub0Rhc2hib2FyZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiVXNlcm5hbWUgYW5kIFBhc3N3b3JkIEludmFsaWRcIik7XG4gICAgICAgICAgdGhpcy5nb1RvTG9naW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2lnbnVwKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG4gICAgdmFyIHVzZXJuYW1lID0gZGF0YS5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgdmFyIHBhc3N3b3JkID0gZGF0YS5nZXQoJ3Bhc3N3b3JkJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICB1cmw6ICcvc2lnbnVwJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICBjb21wbGV0ZTogZGF0YSA9PiB7XG4gICAgICAgIGlmIChkYXRhLnJlc3BvbnNlVGV4dCA9PT0gXCJVc2VyIENyZWF0ZWRcIikge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiB1c2VybmFtZX0pO1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiB0cnVlfSk7XG4gICAgICAgICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWxlcnQoXCJVc2VybmFtZSBhbmQgUGFzc3dvcmQgSW52YWxpZFwiKTtcbiAgICAgICAgICB0aGlzLmdvVG9TaWduVXAoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbG9nT3V0KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2xvZ2dlZEluOiBmYWxzZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJuYW1lOiBudWxsfSk7XG4gICAgdGhpcy5nb1RvRGFzaGJvYXJkKCk7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgQ291bnRkb3duIGFuZCBUaW1lciBGdW5jdGlvbnNcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIHN0YXJ0Q291bnRkb3duKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZG93bjogM30pO1xuICAgIHZhciBpbnRlcnZhbD0gc2V0SW50ZXJ2YWwodGhpcy5jb3VudGRvd24uYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7aW50ZXJ2YWw6IGludGVydmFsfSk7XG4gIH1cblxuICBjb3VudGRvd24oKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLmNvdW50ZG93bjtcbiAgICBjdXJyZW50LS07XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRkb3duOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnRkb3duID09PSAwKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuc3RhdGUuaW50ZXJ2YWwpO1xuICAgICAgdGhpcy5nb1RvV29ya291dCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0VGltZXIoKSB7XG4gICAgdmFyIGN1cnJlbnQgPSB0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnMgKiA2MDtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy50aW1lci5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHtpbnRlcnZhbDogaW50ZXJ2YWx9KTtcbiAgfVxuXG4gIHRpbWVyKCkge1xuICAgIHZhciBjdXJyZW50ID0gdGhpcy5zdGF0ZS50aW1lO1xuICAgIGN1cnJlbnQtLTtcbiAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBjdXJyZW50fSk7XG4gICAgaWYgKHRoaXMuc3RhdGUudGltZSA8PSAwKSB7XG4gICAgICB0aGlzLmdvVG9TdW1tYXJ5KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnRpbWUgJSA2MCA9PT0gMCkge1xuICAgICAgdmFyIG5leHQgPSB0aGlzLnN0YXRlLmN1cnJlbnRFeGVyY2lzZTtcbiAgICAgIG5leHQrKztcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRFeGVyY2lzZTogbmV4dH0pO1xuICAgICAgdGhpcy5yZWZzLndvcmtvdXRQYWdlLmhpZ2hsaWdodEFjdGl2ZVRpdGxlKCk7XG4gICAgfVxuICB9XG5cbiAgZm9ybWF0VGltZShzZWNvbmRzKSB7XG4gICAgdmFyIG1tID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gNjApO1xuICAgIHZhciBzcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoc3MgPCAxMCkge1xuICAgICAgc3MgPSAnMCcgKyBzcztcbiAgICB9XG4gICAgcmV0dXJuIG1tICsgJzonICsgc3M7XG4gIH1cblxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgUmVuZGVycyB0aGUgY29tcG9uZW50cyBiYXNlZCBvdCB0aGUgY3VycmVudCBzdGF0ZVxuKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB0b0JlUmVuZGVyZWQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdEYXNoYm9hcmQnKSB7XG4gICAgICAgIHJldHVybiAoPERhc2hib2FyZCBnb1RvQ291bnRkb3duPXt0aGlzLmdvVG9Db3VudGRvd259IHdvcmtvdXRIaXN0b3J5PXt0aGlzLnN0YXRlLndvcmtvdXRIaXN0b3J5fSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnTG9naW4nKSB7XG4gICAgICAgICAgcmV0dXJuICg8TG9naW4gbG9naW49e3RoaXMubG9naW59IC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ1NpZ25VcCcpIHtcbiAgICAgICAgICByZXR1cm4gKDxTaWduVXAgc2lnbnVwPXt0aGlzLnNpZ251cH0gIC8+KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRTdGF0ZSA9PT0gJ0NvdW50ZG93bicpIHtcbiAgICAgICAgICByZXR1cm4gKDxDb3VudGRvd24gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gLz4pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVudFN0YXRlID09PSAnV29ya291dCcpIHtcbiAgICAgICAgcmV0dXJuICg8V29ya291dCBleGVyY2lzZT17dGhpcy5zdGF0ZS5jdXJyZW50V29ya291dFt0aGlzLnN0YXRlLmN1cnJlbnRFeGVyY2lzZV19IHRpbWVyPXt0aGlzLmZvcm1hdFRpbWUodGhpcy5zdGF0ZS50aW1lKX0gY291bnRkb3duPXt0aGlzLnN0YXRlLmNvdW50ZG93bn0gZ29Ub1N1bW1hcnk9e3RoaXMuZ29Ub1N1bW1hcnl9IGdvVG9EYXNoYm9hcmQ9e3RoaXMuZ29Ub0Rhc2hib2FyZH0gcmVmPVwid29ya291dFBhZ2VcIiAvPik7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50U3RhdGUgPT09ICdTdW1tYXJ5Jykge1xuICAgICAgICByZXR1cm4gKDxTdW1tYXJ5IGdvVG9EYXNoYm9hcmQ9e3RoaXMuZ29Ub0Rhc2hib2FyZH0gY3VycmVudFdvcmtvdXQ9e3RoaXMuc3RhdGUuY3VycmVudFdvcmtvdXR9IHdvcmtvdXREYXRlPXt0aGlzLnN0YXRlLndvcmtvdXREYXRlfSB3b3Jrb3V0TGVuZ3RoSW5NaW5zPXt0aGlzLnN0YXRlLndvcmtvdXRMZW5ndGhJbk1pbnN9IGxvZ2dlZEluPXt0aGlzLnN0YXRlLmxvZ2dlZElufSAvPik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJBcHBcIj5cbiAgICAgICAgPEhlYWRlciB1c2VybmFtZT17dGhpcy5zdGF0ZS51c2VybmFtZX0gZ29Ub0xvZ2luPXt0aGlzLmdvVG9Mb2dpbn0gZ29Ub1NpZ25VcD17dGhpcy5nb1RvU2lnblVwfSBsb2dnZWRJbj17dGhpcy5zdGF0ZS5sb2dnZWRJbn0gbG9nT3V0PXt0aGlzLmxvZ091dH0gc2hvd0J1dHRvbnM9e3RoaXMuc3RhdGUuc2hvd0J1dHRvbnN9Lz5cbiAgICAgICAge3RvQmVSZW5kZXJlZCgpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn0gLy8gRW5kIG9mIENsYXNzXG5cbndpbmRvdy5BcHAgPSBBcHA7Il19