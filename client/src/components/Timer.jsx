import React from 'react';
import './../css/style.css';

var Timer = (props) => (
  <div className="timer">
    {props.timer}
  </div>
);


export default Timer;
// window.Timer = Timer;
