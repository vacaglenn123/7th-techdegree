// Variables
const bellContainer = document.querySelector('.bell-container');
const bellDot = document.querySelector('.dot');
const alertBanner = document.querySelector('.alert-banner');
const closeAlert = document.querySelector('.close-alert');
const navButtons = document.querySelectorAll('.main-nav a');
const trafficCanvas = document.querySelector('#line-chart');
const trafficSelectors = document.querySelectorAll('.traffic-selector');
const sendButton = document.querySelector('.send-btn');
const userInput = document.querySelector('.search-area');
const messageInput = document.querySelector('.message-area');


//Notification Bell
bellContainer.addEventListener('click', (e) => {
  const target = e.target;

  bellDot.style.display = 'none';
})

//Notification Alert Remove
closeAlert.addEventListener('click', (e)=> {
  const alertTarget = e.target;

  alertBanner.style.display = 'none';

})

// -------------------------------------------------- Line Chart -----------------------------------------------//
// traffic options
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 0
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false
    }
  };

//--------------------------------------------------- TRAFFIC DATA----------------------------------------------//
//Monthly Data
let monthlyTraffic = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Monthly Data',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2400, 2200, 2500, 2800, 2500, 3100, 2800]
        }]
};
//Weekly Data
let weeklyTraffic = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
        datasets: [{
            label: 'Weekly Data',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [300, 400, 500, 450, 350]
        }]
};
//Daily Data
let dailyTraffic = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Daily Data',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [5, 50, 40, 35, 40, 30, 10]
        }]
};
//Hourly Data
let hourlyTraffic = {
  labels: ['9am','10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',],
        datasets: [{
            label: 'Hourly Data',
            backgroundColor: 'rgba(255, 99, 132, .5)',
            borderColor: 'rgb(255, 99, 132)',
            data: [2, 3, 3, 12, 15, 10, 12, 8, 3]
        }]
};

// Create Chart Function (passed data from if to find which label is selected)
function generateTrafficChart(data) {
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data,
    options: trafficOptions
  });
}
// Load chart on open
window.addEventListener('DOMContentLoaded', function() {
  let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: monthlyTraffic,
    options: trafficOptions
  });
})
//Data selectors
trafficSelectors.forEach(trafficSelectors => {
  trafficSelectors.addEventListener ('click', e => {
    let currentSelection = e.target;
    document.querySelector('.traffic-active').classList.remove('traffic-active');
    currentSelection.classList.add('traffic-active');

    if (currentSelection.textContent === 'Monthly') {
      generateTrafficChart(monthlyTraffic);
    }
    if (currentSelection.textContent === 'Weekly') {
      generateTrafficChart(weeklyTraffic);
    }
    if (currentSelection.textContent === 'Daily') {
      generateTrafficChart(dailyTraffic);
    }
    if (currentSelection.textContent === 'Hourly') {
      generateTrafficChart(hourlyTraffic);
    }
  })
})

// Bar Chart

var ctx = document.getElementById('bar-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Traffic Avg',
            backgroundColor: '#66b2b2',
            borderColor: '#66b2b2',
            data: [55, 155, 205, 125, 250, 225, 35]
        }]
    },

    // Configuration options go here
    options: {}
});

//Donut Chart

var ctx = document.getElementById('donut-chart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['iOS', 'Android', 'Desktop'],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: ['teal', '#97CECC','rgb(255, 99, 132)'],
            borderColor: ['#006767','#97CECC','rgb(255, 99, 132)'],
            data: [55, 25, 20]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'right'
        }
    }
});

//Send Message Functionality

sendButton.addEventListener ('click', e => {

  if (messageInput.value === '' || userInput.value === '') {
    alert('Please ensure user is entered and message is not empty');
  }
  else {
    alert('Message sent!');
  }
  

})