'use strict';

function ExerciseOptions(props) {
  console.log(props);
  // return <p> hello </p>
  var listItems = props.exercises.map(function (exercise) {
    return React.createElement(
      'li',
      { key: exercise['_id'].toString() },
      React.createElement(
        'a',
        { href: '#', value: exercise['_id'], onClick: props.handleWorkoutSelection },
        ' ',
        exercise.name,
        ' '
      )
    );
  });
  return React.createElement(
    'ul',
    null,
    listItems
  );
}

window.ExerciseOptions = ExerciseOptions;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0V4ZXJjaXNlT3B0aW9ucy5qc3giXSwibmFtZXMiOlsiRXhlcmNpc2VPcHRpb25zIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibGlzdEl0ZW1zIiwiZXhlcmNpc2VzIiwibWFwIiwiZXhlcmNpc2UiLCJ0b1N0cmluZyIsImhhbmRsZVdvcmtvdXRTZWxlY3Rpb24iLCJuYW1lIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQzlCQyxVQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQTtBQUNBLE1BQUlHLFlBQVlILE1BQU1JLFNBQU4sQ0FBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLFFBQUQ7QUFBQSxXQUNsQztBQUFBO0FBQUEsUUFBSSxLQUFLQSxTQUFTLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQVQ7QUFDRTtBQUFBO0FBQUEsVUFBRyxNQUFLLEdBQVIsRUFBWSxPQUFPRCxTQUFTLEtBQVQsQ0FBbkIsRUFBb0MsU0FBU04sTUFBTVEsc0JBQW5EO0FBQUE7QUFBNkVGLGlCQUFTRyxJQUF0RjtBQUFBO0FBQUE7QUFERixLQURrQztBQUFBLEdBQXBCLENBQWhCO0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBS047QUFBTCxHQURGO0FBR0Q7O0FBSURPLE9BQU9YLGVBQVAsR0FBeUJBLGVBQXpCIiwiZmlsZSI6IkV4ZXJjaXNlT3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEV4ZXJjaXNlT3B0aW9ucyhwcm9wcykge1xuICBjb25zb2xlLmxvZyhwcm9wcylcbiAgLy8gcmV0dXJuIDxwPiBoZWxsbyA8L3A+XG4gIHZhciBsaXN0SXRlbXMgPSBwcm9wcy5leGVyY2lzZXMubWFwKChleGVyY2lzZSkgPT5cbiAgICA8bGkga2V5PXtleGVyY2lzZVsnX2lkJ10udG9TdHJpbmcoKX0+XG4gICAgICA8YSBocmVmPVwiI1wiIHZhbHVlPXtleGVyY2lzZVsnX2lkJ119IG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVdvcmtvdXRTZWxlY3Rpb259PiB7ZXhlcmNpc2UubmFtZX0gPC9hPlxuICAgIDwvbGk+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPHVsPntsaXN0SXRlbXN9PC91bD5cbiAgKTtcbn1cblxuXG5cbndpbmRvdy5FeGVyY2lzZU9wdGlvbnMgPSBFeGVyY2lzZU9wdGlvbnM7XG4iXX0=