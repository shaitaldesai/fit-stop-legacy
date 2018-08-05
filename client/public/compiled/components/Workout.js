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
        document.body.style = 'background: #ffffe5';
        this.setState({ warmupActive: true, workoutActive: false, cooldownActive: false });
      } else if (this.props.exercise.type === 'workout') {
        document.body.style = 'background: #e5f9ff';
        this.setState({ warmupActive: false, workoutActive: true, cooldownActive: false });
      } else if (this.props.exercise.type === 'cooldown') {
        document.body.style = 'background: #f2ffe5';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1dvcmtvdXQuanN4Il0sIm5hbWVzIjpbIldvcmtvdXQiLCJwcm9wcyIsInN0YXRlIiwid2FybXVwQWN0aXZlIiwid29ya291dEFjdGl2ZSIsImNvb2xkb3duQWN0aXZlIiwiaGlnaGxpZ2h0QWN0aXZlVGl0bGUiLCJiaW5kIiwiZXhlcmNpc2UiLCJ0eXBlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lciIsImdvVG9EYXNoYm9hcmQiLCJnb1RvU3VtbWFyeSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxvQkFBYyxLQURIO0FBRVhDLHFCQUFlLEtBRko7QUFHWEMsc0JBQWdCO0FBSEwsS0FBYjtBQUtBLFVBQUtDLG9CQUFMLENBQTBCQyxJQUExQjtBQVBpQjtBQVFsQjs7QUFFSDs7Ozs7O3dDQUlzQjtBQUNsQixXQUFLRCxvQkFBTDtBQUNEOzs7MkNBRXNCO0FBQ3JCLFVBQUksS0FBS0wsS0FBTCxDQUFXTyxRQUFYLENBQW9CQyxJQUFwQixLQUE2QixRQUFqQyxFQUEyQztBQUN6Q0MsaUJBQVNDLElBQVQsQ0FBY0MsS0FBZCxHQUFzQixxQkFBdEI7QUFDQSxhQUFLQyxRQUFMLENBQWMsRUFBQ1YsY0FBYyxJQUFmLEVBQXFCQyxlQUFlLEtBQXBDLEVBQTJDQyxnQkFBZ0IsS0FBM0QsRUFBZDtBQUNELE9BSEQsTUFHTyxJQUFJLEtBQUtKLEtBQUwsQ0FBV08sUUFBWCxDQUFvQkMsSUFBcEIsS0FBNkIsU0FBakMsRUFBNEM7QUFDakRDLGlCQUFTQyxJQUFULENBQWNDLEtBQWQsR0FBc0IscUJBQXRCO0FBQ0EsYUFBS0MsUUFBTCxDQUFjLEVBQUNWLGNBQWMsS0FBZixFQUFzQkMsZUFBZSxJQUFyQyxFQUEyQ0MsZ0JBQWdCLEtBQTNELEVBQWQ7QUFDRCxPQUhNLE1BR0EsSUFBSSxLQUFLSixLQUFMLENBQVdPLFFBQVgsQ0FBb0JDLElBQXBCLEtBQTZCLFVBQWpDLEVBQTZDO0FBQ2xEQyxpQkFBU0MsSUFBVCxDQUFjQyxLQUFkLEdBQXNCLHFCQUF0QjtBQUNBLGFBQUtDLFFBQUwsQ0FBYyxFQUFDVixjQUFjLEtBQWYsRUFBc0JDLGVBQWUsS0FBckMsRUFBNENDLGdCQUFnQixJQUE1RCxFQUFkO0FBQ0QsT0FITSxNQUdBO0FBQ0xTLGdCQUFRQyxHQUFSLENBQVksNkJBQVo7QUFDRDtBQUNGOztBQUVIOzs7Ozs7NkJBSVk7QUFDUixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVcsa0JBQWtCLEtBQUtiLEtBQUwsQ0FBV0MsWUFBWCxHQUEwQixhQUExQixHQUEwQyxJQUE1RCxDQUFqQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLFdBQVcsbUJBQW1CLEtBQUtELEtBQUwsQ0FBV0UsYUFBWCxHQUEyQixhQUEzQixHQUEyQyxJQUE5RCxDQUFqQjtBQUFBO0FBQUEsU0FGRjtBQUdFO0FBQUE7QUFBQSxZQUFNLFdBQVcsb0JBQW9CLEtBQUtGLEtBQUwsQ0FBV0csY0FBWCxHQUE0QixhQUE1QixHQUE0QyxJQUFoRSxDQUFqQjtBQUFBO0FBQUEsU0FIRjtBQUtFLDRCQUFDLEtBQUQsSUFBTyxPQUFRLEtBQUtKLEtBQUwsQ0FBV2UsS0FBMUIsR0FMRjtBQU1FLDRCQUFDLFFBQUQsSUFBVSxVQUFVLEtBQUtmLEtBQUwsQ0FBV08sUUFBL0IsR0FORjtBQU9FO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS1AsS0FBTCxDQUFXZ0IsYUFBNUIsRUFBMkMsV0FBVSxhQUFyRDtBQUFBO0FBQUEsU0FQRjtBQVFFO0FBQUE7QUFBQSxZQUFRLFNBQVMsS0FBS2hCLEtBQUwsQ0FBV2lCLFdBQTVCLEVBQXlDLFdBQVUsYUFBbkQ7QUFBQTtBQUFBO0FBUkYsT0FERjtBQVlEOzs7O0VBbkRtQkMsTUFBTUMsUyxHQXFEMUI7OztBQUdGQyxPQUFPckIsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoiV29ya291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdvcmtvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgd2FybXVwQWN0aXZlOiBmYWxzZSxcbiAgICAgIHdvcmtvdXRBY3RpdmU6IGZhbHNlLFxuICAgICAgY29vbGRvd25BY3RpdmU6IGZhbHNlXG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0QWN0aXZlVGl0bGUuYmluZCh0aGlzKTtcbiAgfVxuXG4vKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBzZXRzIGNzcyBvbiBtb3VudCBhbmQgdXBkYXRlcyB3aXRoIGN1cnJlbnQgZXhlcmNpc2UgKHRyaWdnZXJlZCBvbiB0aW1lcigpIG9uIEFwcC5qcylcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAgKiAqICogKiAqICogKiAqICAqICogKiAqICogKiAqICogKiAqICovXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5oaWdobGlnaHRBY3RpdmVUaXRsZSgpO1xuICB9XG5cbiAgaGlnaGxpZ2h0QWN0aXZlVGl0bGUoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZXhlcmNpc2UudHlwZSA9PT0gJ3dhcm11cCcpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnYmFja2dyb3VuZDogI2ZmZmZlNSc7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXJtdXBBY3RpdmU6IHRydWUsIHdvcmtvdXRBY3RpdmU6IGZhbHNlLCBjb29sZG93bkFjdGl2ZTogZmFsc2V9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuZXhlcmNpc2UudHlwZSA9PT0gJ3dvcmtvdXQnKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlID0gJ2JhY2tncm91bmQ6ICNlNWY5ZmYnO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2FybXVwQWN0aXZlOiBmYWxzZSwgd29ya291dEFjdGl2ZTogdHJ1ZSwgY29vbGRvd25BY3RpdmU6IGZhbHNlfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmV4ZXJjaXNlLnR5cGUgPT09ICdjb29sZG93bicpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUgPSAnYmFja2dyb3VuZDogI2YyZmZlNSc7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXJtdXBBY3RpdmU6IGZhbHNlLCB3b3Jrb3V0QWN0aXZlOiBmYWxzZSwgY29vbGRvd25BY3RpdmU6IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3dvcmtvdXQgdHlwZSBkb2VzIG5vdCBleGlzdCcpXG4gICAgfVxuICB9XG5cbi8qICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKlxuICBDaGFuZ2UgY3NzIGJhc2VkIG9uIHdoaWNoIGV4ZXJjaXNlIHR5cGVcbiogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqICogKiAqL1xuXG4gICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya291dFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyd3YXJtdXBUaXRsZSAnICsgKHRoaXMuc3RhdGUud2FybXVwQWN0aXZlID8gJ2FjdGl2ZVRpdGxlJyA6IG51bGwpfT5XYXJtdXA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J3dvcmtvdXRUaXRsZSAnICsgKHRoaXMuc3RhdGUud29ya291dEFjdGl2ZSA/ICdhY3RpdmVUaXRsZScgOiBudWxsKX0+V29ya291dDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnY29vbGRvd25UaXRsZSAnICsgKHRoaXMuc3RhdGUuY29vbGRvd25BY3RpdmUgPyAnYWN0aXZlVGl0bGUnIDogbnVsbCl9PkNvb2xkb3duPC9zcGFuPlxuXG4gICAgICAgIDxUaW1lciB0aW1lcj0ge3RoaXMucHJvcHMudGltZXJ9IC8+XG4gICAgICAgIDxFeGVyY2lzZSBleGVyY2lzZT17dGhpcy5wcm9wcy5leGVyY2lzZX0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmdvVG9EYXNoYm9hcmR9IGNsYXNzTmFtZT1cImJsYWNrQnV0dG9uXCI+UXVpdCAmIEJhY2sgVG8gRGFzaGJvYXJkPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5nb1RvU3VtbWFyeX0gY2xhc3NOYW1lPVwiYmxhY2tCdXR0b25cIj5TdW1tYXJ5PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbn0gLy8gRW5kIG9mIENsYXNzXG5cblxud2luZG93LldvcmtvdXQgPSBXb3Jrb3V0O1xuXG4iXX0=