import React from 'react';
import {Bar} from 'react-chartjs-2';
import _ from 'underscore';
import {monthArr} from './data.js';
import './../css/style.css';
// import {febArr} from './data.js';
// import {febLeapArr} from './data.js';


class FitBarMonthChart extends React.Component{
  constructor(props) {
    super(props);

    const data = {
      labels: [],
      datasets: [
        {
          label: 'Your Fitness Trend for Current Month',
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
    //******* to be used with data from database ********
    // var today = new Date();
    // var todaysDay = today.getDay();
    // var todaysDayName = weekDays[todaysDay];
    // var todaysDate = today.getDate();
    // var month = today.getMonth() - 1;
    // var year = today.getYear() - 100;
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var todaysDayName = 'Mon'; // hard code data
    var todaysDate = 30;
    var month = 3;
    var year = 18;

    var thisMonth = monthArr.filter(day => {
      var thisDay = new Date(day.date);
      var thisDayName = thisDay.getDay();
      var thisDate = thisDay.getDate();
      var thisYear = thisDay.getYear() - 100;
      var thisMonth = thisDay.getMonth();
      if (thisYear === year && thisMonth === month) {
          return day; 
        }
    });

    thisMonth = thisMonth.map(day => {
      var thisDate = new Date(day.date).getDate();
      return {date: thisDate, lengthOfWorkout: day.lengthOfWorkout};
    });

    var createLabel = [];
    if (month === 0 || month === 2 || month === 4 || month === 6|| month === 7 || month === 9 || month === 11 ) {
      createLabel = Array(31);
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      createLabel = Array(30);
    } else if (month === 1 && thisYear % 4 === 0) {
      createLabel = Array(29);
    } else {
      createLabel = Array(28);
    }
    var label = [];
    for (var i = 0; i < createLabel.length; i++) {
      label.push(i + 1);
    }

    var unique = _.uniq(thisMonth, (item) => {
      return item.date;
    }).map(item => {
      return item.date;
    });
    unique.reverse();
    console.log('UNIQUE', unique);
    var sumArr = [];
    for (var j = 0; j < unique.length; j++) {
      sumArr[j] = thisMonth.filter(item => {
        return item.date === unique[j];
      }).reduce((a, b) => {
        var lengthWorkout = a.lengthOfWorkout + b.lengthOfWorkout;
        return {date: b.date, lengthOfWorkout: lengthWorkout};
      }, {date: 0, lengthOfWorkout: 0});
    }
    var workoutSum = [];
    for (var k = 1; k < label.length + 1; k++) {
      var index = unique.indexOf(label[k - 1]);
      if (index !== -1) {
        workoutSum[k] = {date: sumArr[index].date, lengthOfWorkout: sumArr[index].lengthOfWorkout};
      } else if (index === -1) {
        workoutSum[k] = {date: k, lengthOfWorkout: 0}
      }
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
      <h4>Your Fitness Trend for Current Month</h4>
    <Bar data={this.state.data}
    width={100}
    height={100}
    options={{maintainAspectRatio: false}}/>
    </div>
  )
  }

}


export default FitBarMonthChart;