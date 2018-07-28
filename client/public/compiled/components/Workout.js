'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Workout = function (_React$Component) {
  _inherits(Workout, _React$Component);

  function Workout(props) {
    _classCallCheck(this, Workout);

    var _this = _possibleConstructorReturn(this, (Workout.__proto__ || Object.getPrototypeOf(Workout)).call(this, props));

    _this.state = {
      warmupActive: false,
      workoutActive: false,
      cooldownActive: false
    };
    _this.highlightActiveTitle.bind(_this);
    return _this;
  }

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    sets css on mount and updates with current exercise (triggered on timer() on App.js)
  * * * * * * * * * * * * * * * * * * * * * * * * * *  * * * * * * * *  * * * * * * * * * * */

  _createClass(Workout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.highlightActiveTitle();
    }
  }, {
    key: 'highlightActiveTitle',
    value: function highlightActiveTitle() {
      if (this.props.exercise.type === 'warmup') {
        this.setState({ warmupActive: true, workoutActive: false, cooldownActive: false });
      } else if (this.props.exercise.type === 'workout') {
        this.setState({ warmupActive: false, workoutActive: true, cooldownActive: false });
      } else if (this.props.exercise.type === 'cooldown') {
        this.setState({ warmupActive: false, workoutActive: false, cooldownActive: true });
      } else {
        console.log('workout type does not exist');
      }
    }

    /* * * * * * * * * * * * * * * * * * * * * * * * * * *
      Change css based on which exercise type
    * * * * * * * * * * * * * * * * * * * * * * * * * * */

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'workout' },
        React.createElement(
          'span',
          { className: 'warmupTitle ' + (this.state.warmupActive ? 'activeTitle' : null) },
          'Warmup'
        ),
        React.createElement(
          'span',
          { className: 'workoutTitle ' + (this.state.workoutActive ? 'activeTitle' : null) },
          'Workout'
        ),
        React.createElement(
          'span',
          { className: 'cooldownTitle ' + (this.state.cooldownActive ? 'activeTitle' : null) },
          'Cooldown'
        ),
        React.createElement(Timer, { timer: this.props.timer }),
        React.createElement(Exercise, { exercise: this.props.exercise }),
        React.createElement(
          'button',
          { onClick: this.props.goToDashboard, className: 'blackButton' },
          'Quit & Back To Dashboard'
        ),
        React.createElement(
          'button',
          { onClick: this.props.goToSummary, className: 'blackButton' },
          'Summary'
        )
      );
    }
  }]);

  return Workout;
}(React.Component); // End of Class


window.Workout = Workout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsInN0YXRlIiwid2FybXVwQWN0aXZlIiwid29ya291dEFjdGl2ZSIsImNvb2xkb3duQWN0aXZlIiwiaGlnaGxpZ2h0QWN0aXZlVGl0bGUiLCJiaW5kIiwiZXhlcmNpc2UiLCJ0eXBlIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJnb1RvRGFzaGJvYXJkIiwiZ29Ub1N1bW1hcnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxPOzs7QUFDSixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsb0JBQWMsS0FESDtBQUVYQyxxQkFBZSxLQUZKO0FBR1hDLHNCQUFnQjtBQUhMLEtBQWI7QUFLQSxVQUFLQyxvQkFBTCxDQUEwQkMsSUFBMUI7QUFQaUI7QUFRbEI7O0FBRUg7Ozs7Ozt3Q0FJc0I7QUFDbEIsV0FBS0Qsb0JBQUw7QUFDRDs7OzJDQUVzQjtBQUNyQixVQUFJLEtBQUtMLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsSUFBcEIsS0FBNkIsUUFBakMsRUFBMkM7QUFDekMsYUFBS0MsUUFBTCxDQUFjLEVBQUNQLGNBQWMsSUFBZixFQUFxQkMsZUFBZSxLQUFwQyxFQUEyQ0MsZ0JBQWdCLEtBQTNELEVBQWQ7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLSixLQUFMLENBQVdPLFFBQVgsQ0FBb0JDLElBQXBCLEtBQTZCLFNBQWpDLEVBQTRDO0FBQ2pELGFBQUtDLFFBQUwsQ0FBYyxFQUFDUCxjQUFjLEtBQWYsRUFBc0JDLGVBQWUsSUFBckMsRUFBMkNDLGdCQUFnQixLQUEzRCxFQUFkO0FBQ0QsT0FGTSxNQUVBLElBQUksS0FBS0osS0FBTCxDQUFXTyxRQUFYLENBQW9CQyxJQUFwQixLQUE2QixVQUFqQyxFQUE2QztBQUNsRCxhQUFLQyxRQUFMLENBQWMsRUFBQ1AsY0FBYyxLQUFmLEVBQXNCQyxlQUFlLEtBQXJDLEVBQTRDQyxnQkFBZ0IsSUFBNUQsRUFBZDtBQUNELE9BRk0sTUFFQTtBQUNMTSxnQkFBUUMsR0FBUixDQUFZLDZCQUFaO0FBQ0Q7QUFDRjs7QUFFSDs7Ozs7OzZCQUlZO0FBQ1IsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFXLGtCQUFrQixLQUFLVixLQUFMLENBQVdDLFlBQVgsR0FBMEIsYUFBMUIsR0FBMEMsSUFBNUQsQ0FBakI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBTSxXQUFXLG1CQUFtQixLQUFLRCxLQUFMLENBQVdFLGFBQVgsR0FBMkIsYUFBM0IsR0FBMkMsSUFBOUQsQ0FBakI7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBTSxXQUFXLG9CQUFvQixLQUFLRixLQUFMLENBQVdHLGNBQVgsR0FBNEIsYUFBNUIsR0FBNEMsSUFBaEUsQ0FBakI7QUFBQTtBQUFBLFNBSEY7QUFLRSw0QkFBQyxLQUFELElBQU8sT0FBUSxLQUFLSixLQUFMLENBQVdZLEtBQTFCLEdBTEY7QUFNRSw0QkFBQyxRQUFELElBQVUsVUFBVSxLQUFLWixLQUFMLENBQVdPLFFBQS9CLEdBTkY7QUFPRTtBQUFBO0FBQUEsWUFBUSxTQUFTLEtBQUtQLEtBQUwsQ0FBV2EsYUFBNUIsRUFBMkMsV0FBVSxhQUFyRDtBQUFBO0FBQUEsU0FQRjtBQVFFO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS2IsS0FBTCxDQUFXYyxXQUE1QixFQUF5QyxXQUFVLGFBQW5EO0FBQUE7QUFBQTtBQVJGLE9BREY7QUFZRDs7OztFQWhEbUJDLE1BQU1DLFMsR0FrRDFCOzs7QUFHRkMsT0FBT2xCLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IldvcmtvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBXb3Jrb3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHdhcm11cEFjdGl2ZTogZmFsc2UsXG4gICAgICB3b3Jrb3V0QWN0aXZlOiBmYWxzZSxcbiAgICAgIGNvb2xkb3duQWN0aXZlOiBmYWxzZVxuICAgIH1cbiAgICB0aGlzLmhpZ2hsaWdodEFjdGl2ZVRpdGxlLmJpbmQodGhpcyk7XG4gIH1cblxuLyogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgc2V0cyBjc3Mgb24gbW91bnQgYW5kIHVwZGF0ZXMgd2l0aCBjdXJyZW50IGV4ZXJjaXNlICh0cmlnZ2VyZWQgb24gdGltZXIoKSBvbiBBcHAuanMpXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogICogKiAqICogKiAqICogKiAgKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0QWN0aXZlVGl0bGUoKTtcbiAgfVxuXG4gIGhpZ2hsaWdodEFjdGl2ZVRpdGxlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmV4ZXJjaXNlLnR5cGUgPT09ICd3YXJtdXAnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXJtdXBBY3RpdmU6IHRydWUsIHdvcmtvdXRBY3RpdmU6IGZhbHNlLCBjb29sZG93bkFjdGl2ZTogZmFsc2V9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZXhlcmNpc2UudHlwZSA9PT0gJ3dvcmtvdXQnKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXJtdXBBY3RpdmU6IGZhbHNlLCB3b3Jrb3V0QWN0aXZlOiB0cnVlLCBjb29sZG93bkFjdGl2ZTogZmFsc2V9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZXhlcmNpc2UudHlwZSA9PT0gJ2Nvb2xkb3duJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2FybXVwQWN0aXZlOiBmYWxzZSwgd29ya291dEFjdGl2ZTogZmFsc2UsIGNvb2xkb3duQWN0aXZlOiB0cnVlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3b3Jrb3V0IHR5cGUgZG9lcyBub3QgZXhpc3QnKVxuICAgIH1cbiAgfVxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICpcbiAgQ2hhbmdlIGNzcyBiYXNlZCBvbiB3aGljaCBleGVyY2lzZSB0eXBlXG4qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKi9cblxuICAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtvdXRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnd2FybXVwVGl0bGUgJyArICh0aGlzLnN0YXRlLndhcm11cEFjdGl2ZSA/ICdhY3RpdmVUaXRsZScgOiBudWxsKX0+V2FybXVwPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd3b3Jrb3V0VGl0bGUgJyArICh0aGlzLnN0YXRlLndvcmtvdXRBY3RpdmUgPyAnYWN0aXZlVGl0bGUnIDogbnVsbCl9PldvcmtvdXQ8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2Nvb2xkb3duVGl0bGUgJyArICh0aGlzLnN0YXRlLmNvb2xkb3duQWN0aXZlID8gJ2FjdGl2ZVRpdGxlJyA6IG51bGwpfT5Db29sZG93bjwvc3Bhbj5cblxuICAgICAgICA8VGltZXIgdGltZXI9IHt0aGlzLnByb3BzLnRpbWVyfSAvPlxuICAgICAgICA8RXhlcmNpc2UgZXhlcmNpc2U9e3RoaXMucHJvcHMuZXhlcmNpc2V9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb1RvRGFzaGJvYXJkfSBjbGFzc05hbWU9XCJibGFja0J1dHRvblwiPlF1aXQgJiBCYWNrIFRvIERhc2hib2FyZDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuZ29Ub1N1bW1hcnl9IGNsYXNzTmFtZT1cImJsYWNrQnV0dG9uXCI+U3VtbWFyeTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG59IC8vIEVuZCBvZiBDbGFzc1xuXG5cbndpbmRvdy5Xb3Jrb3V0ID0gV29ya291dDtcblxuIl19