import React from 'react';
import {Bar} from 'react-chartjs-2';
import _ from 'underscore';
import {daysArr} from './data.js';
import {febArr} from './data.js';
import {febLeapArr} from './data.js';
import './../css/style.css';


class FitBarChart extends React.Component{
  constructor(props) {
    super(props);

    const data = {
      labels: [],
      datasets: [
        {
          label: 'Your Fitness Trend for Current Week',
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

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    //******* use when data is obtained from database ********
    // var today = new Date();
    // var todaysDay = today.getDay();
    // var todaysDayName = weekDays[todaysDay];
    // var month = today.getMonth();
    // var todaysDate = today.getDate();
    // var year = today.getYear() - 100;
    var todaysDayName = 'Sat';
    var todaysDate = 4; // hard coded data
    var month = 2;
    var year = 17;

    var thisWeek = febArr.filter(day => {
      var thisDay = new Date(day.date);
      var thisDayName = thisDay.getDay();
      var thisDate = thisDay.getDate();
      var thisYear = thisDay.getYear() - 100;
      var thisMonth = thisDay.getMonth();
      if (
        ((thisYear === year) || (thisYear === year - 1 && month === 0 && todaysDate < 7)) && 
        ((thisMonth === month) || (thisMonth === month - 1 && todaysDate < 7)) && 
        (thisDate <= todaysDate && thisDate >= todaysDate - 6) || (todaysDate < 7 && thisDate > 31 - (7 - todaysDate) && thisMonth === 0 || thisMonth === 2 || thisMonth === 4 || thisMonth === 6|| thisMonth === 7 || thisMonth === 9 || thisMonth === 11) ||
        (thisDate > 30 - (7 - todaysDate) && thisMonth === 3 || thisMonth === 5 || thisMonth === 8 || thisMonth === 10) ||  
        (thisDate > 29 - (7 - todaysDate) && thisMonth === 1 && thisYear % 4 === 0) || 
          (thisDate > 28 - (7 - todaysDate) && thisMonth === 1) 
      ) {
          return day; 
        }
    });

    thisWeek = thisWeek.map(day => {
      var thisDay = new Date(day.date).getDay();
      thisDay = weekDays[thisDay];
      return {day: thisDay, lengthOfWorkout: day.lengthOfWorkout};
    });

    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var index = weekDays.indexOf('todaysDayName');
    var spliced = weekDays.splice(index);
    var label = spliced.concat(weekDays);
    // var label = _.uniq(thisWeek, false, (item) => {
    //   return item.day;
    // }).map(item => {
    //   return item.day;
    // });
    var workoutSum = [];
    for (var i = 0; i < label.length; i++) {
      workoutSum[i] = {day: label[i], lengthOfWorkout: 0};
    }

    for (var j = 0; j < label.length; j++) {
      workoutSum[j].lengthOfWorkout = thisWeek.filter((item, index) => {
        return label[j] === item.day;
      }).map(item => {
        return item.lengthOfWorkout;
      }).reduce((a, b) => {
        return a + b;
      }, 0);
    }

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
      <h4>Your Fitness Trend for Current Week</h4>
    <Bar data={this.state.data}
    width={100}
    height={100}
    options={{maintainAspectRatio: false}}/>
    </div>
  )
  }

}


export default FitBarChart;