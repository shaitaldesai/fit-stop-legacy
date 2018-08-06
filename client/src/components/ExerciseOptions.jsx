import React from 'react';
import './../css/style.css';

function ExerciseOptions(props) {
  console.log(props)
  // return <p> hello </p>
  var listItems = props.exercises.map((exercise) =>
    <li key={exercise['_id'].toString()}>
      <a href="#" value={exercise['_id']} onClick={props.handleWorkoutSelection}> {exercise.name} </a>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}



export default ExerciseOptions;
// window.ExerciseOptions = ExerciseOptions;
