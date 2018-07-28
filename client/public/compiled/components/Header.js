'use strict';

var Header = function Header(props) {
  return React.createElement(
    'div',
    { className: 'header' },
    props.showButtons && props.loggedIn && React.createElement(
      'button',
      { className: 'blackButton', onClick: props.logOut },
      'Log Out'
    ),
    props.showButtons && !props.loggedIn && React.createElement(
      'button',
      { className: 'blackButton', onClick: props.goToLogin },
      'Log In'
    ),
    !props.loggedIn && props.showButtons && React.createElement(
      'button',
      { className: 'blackButton', onClick: props.goToSignUp },
      'Sign Up'
    ),
    React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        ' FitStop ',
        React.createElement(
          'span',
          { className: 'username' },
          props.username
        )
      )
    )
  );
};

window.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giXSwibmFtZXMiOlsiSGVhZGVyIiwicHJvcHMiLCJzaG93QnV0dG9ucyIsImxvZ2dlZEluIiwibG9nT3V0IiwiZ29Ub0xvZ2luIiwiZ29Ub1NpZ25VcCIsInVzZXJuYW1lIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFNBQVMsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FDWDtBQUFBO0FBQUEsTUFBSyxXQUFVLFFBQWY7QUFDR0EsVUFBTUMsV0FBTixJQUFxQkQsTUFBTUUsUUFBM0IsSUFBd0M7QUFBQTtBQUFBLFFBQVEsV0FBVSxhQUFsQixFQUFnQyxTQUFTRixNQUFNRyxNQUEvQztBQUFBO0FBQUEsS0FEM0M7QUFFR0gsVUFBTUMsV0FBTixJQUFxQixDQUFDRCxNQUFNRSxRQUE1QixJQUF5QztBQUFBO0FBQUEsUUFBUSxXQUFVLGFBQWxCLEVBQWdDLFNBQVNGLE1BQU1JLFNBQS9DO0FBQUE7QUFBQSxLQUY1QztBQUdHLEtBQUNKLE1BQU1FLFFBQVAsSUFBbUJGLE1BQU1DLFdBQXpCLElBQXlDO0FBQUE7QUFBQSxRQUFRLFdBQVUsYUFBbEIsRUFBZ0MsU0FBU0QsTUFBTUssVUFBL0M7QUFBQTtBQUFBLEtBSDVDO0FBSUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBYTtBQUFBO0FBQUEsWUFBTSxXQUFVLFVBQWhCO0FBQTRCTCxnQkFBTU07QUFBbEM7QUFBYjtBQURGO0FBSkYsR0FEVztBQUFBLENBQWI7O0FBWUFDLE9BQU9SLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6IkhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBIZWFkZXIgPSAocHJvcHMpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICB7cHJvcHMuc2hvd0J1dHRvbnMgJiYgcHJvcHMubG9nZ2VkSW4gJiYgKDxidXR0b24gY2xhc3NOYW1lPSdibGFja0J1dHRvbicgb25DbGljaz17cHJvcHMubG9nT3V0fT5Mb2cgT3V0PC9idXR0b24+KX1cbiAgICB7cHJvcHMuc2hvd0J1dHRvbnMgJiYgIXByb3BzLmxvZ2dlZEluICYmICg8YnV0dG9uIGNsYXNzTmFtZT0nYmxhY2tCdXR0b24nIG9uQ2xpY2s9e3Byb3BzLmdvVG9Mb2dpbn0+TG9nIEluPC9idXR0b24+KX1cbiAgICB7IXByb3BzLmxvZ2dlZEluICYmIHByb3BzLnNob3dCdXR0b25zICYmICg8YnV0dG9uIGNsYXNzTmFtZT0nYmxhY2tCdXR0b24nIG9uQ2xpY2s9e3Byb3BzLmdvVG9TaWduVXB9PlNpZ24gVXA8L2J1dHRvbj4pfVxuICAgIDxkaXY+XG4gICAgICA8aDE+IEZpdFN0b3AgPHNwYW4gY2xhc3NOYW1lPSd1c2VybmFtZSc+e3Byb3BzLnVzZXJuYW1lfTwvc3Bhbj48L2gxPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cblxud2luZG93LkhlYWRlciA9IEhlYWRlcjtcbiJdfQ==