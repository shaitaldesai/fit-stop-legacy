import React from 'react';
import {Bar} from 'react-chartjs-2';
import _ from 'underscore';
import {yearArr} from './data.js';
import './../css/style.css';


class FitBarYearChart extends React.Component{
  constructor(props) {
    super(props);

    const data = {
      labels: [],
      datasets: [
        {
          label: 'Your Fitness Trend for Current Year',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10, 
          data: []
        }
      ]
    };

    this.state = {
      data: data
    };
  }

  //implementation with fake data, not enough data in database to make chart

  componentDidMount() {

    var label = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    //****** use with dta from database **********
    // var today = new Date();
    // var todaysDay = today.getDay();
    // var todaysDate = today.getDate();
    // var month = today.getMonth() - 1;
    // var year = today.getYear() - 100;

    var todaysDate = 30; // hard coded data, because not enough data in database
    var month = 3;
    var year = 18;

    var thisYear = yearArr.filter(workout => {
      var thisDay = new Date(workout.date);
      var thisYear = thisDay.getYear() - 100;
      if (thisYear === year) {
        return workout; 
      }
    });

    thisYear = thisYear.map(workout => {
      var thisTime = new Date(workout.date);
      var thisMonth = thisTime.getMonth();
      return {month: label[thisMonth], lengthOfWorkout: workout.lengthOfWorkout};
    });
    console.log('THISYEAR', thisYear);

    var unique = _.uniq(thisYear, (item) => {
      return item.month;
    });

    var sumArr = [];
    for (var i = 0; i < unique.length; i++) {
      sumArr[i] = thisYear.filter(workout => {
        return label[i] === workout.month;
      }).reduce((a, b) => {
          return {month: b.month, lengthOfWorkout: a.lengthOfWorkout + b.lengthOfWorkout};
      }, {month: 0, lengthOfWorkout: 0});
    }

    var workoutSum = [];
    label.forEach((month, index) => {
      var filtered = sumArr.filter(workout => {
        return month === workout.month;
      });
      if (filtered.length > 0) {
        workoutSum[index] = filtered[0];
      } else {
        workoutSum[index] = {month: month, lengthOfWorkout: 0};
      }
    });

    var workoutByWeek = workoutSum.map(item => {
      return item.lengthOfWorkout;
    });

    this.state.data.labels = label;
    this.state.data.datasets[0].data = workoutByWeek;  

    this.setState({
      data: this.state.data
    })
  }

  render() {
    return (
      <div>
      <h4>Your Fitness Trend for Current Year</h4>
    <Bar data={this.state.data}
    width={100}
    height={100}
    options={{maintainAspectRatio: false}}/>
    </div>
  )
  }

}


export default FitBarYearChart;