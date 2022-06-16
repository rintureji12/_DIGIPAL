// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         animationEnabled: true,
//         theme: "light2", // "light1", "light2", "dark1", "dark2"
//         title: {
//             text: "GDP Growth Rate - 2016"
//         },
//         axisY: {
//             title: "Growth Rate (in %)",
//             suffix: "%"
//         },
//         axisX: {
//             title: "Countries"
//         },
//         data: [{
//             type: "column",
//             yValueFormatString: "#,##0.0#\"%\"",
//             dataPoints: [
//                 { label: "India", y: 7.1 },	
//                 { label: "China", y: 6.70 },	
//                 { label: "Indonesia", y: 5.00 },
//                 { label: "Australia", y: 2.50 },	
//                 { label: "Mexico", y: 2.30 },
//                 { label: "UK", y: 1.80 },
//                 { label: "United States", y: 1.60 },
//                 { label: "Japan", y: 1.60 }
                
//             ]
//         }]
//     });
//     chart.render();
    
//     }

Chart.defaults.global.defaultFontColor = 'black';
var xValues = ["Below 18", "18-50", "50 above"];
var yValues = [36,57,68];
var barColors = [
  'rgb(0, 102, 0)','rgb(0, 102, 0)','rgb(0, 102, 0)'
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: 'Patient age category',
        fontSize:20
    },
    
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize:16
        }
      }],
      xAxes: [{
        ticks: {
          fontSize:16

        }
      }],
    }
  }
});


var xValue = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValue = [55, 49, 44, 24, 15];
var barColor = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "brown",
  "#1e7145"
];

new Chart("myChart2", {
  type: "doughnut",
  data: {
    labels: xValue,
    datasets: [{
      backgroundColor: barColor,
      data: yValue
    }]
  },
  options: {
    title: {
      display: true,
      text: "Donator's country",
      fontSize:20
    }
  }
});
