import React from 'react';
import './../css/style.css';

var PastWorkout = (props) => (
  <div className="pastWorkout">
    <p> <span className="dateAndTime">{props.date}</span> | <span>{props.lengthOfWorkout} minutes</span> </p>
  </div>
);


export default PastWorkout;
// window.PastWorkout = PastWorkout;

