// coin2-6M js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["November", "December", "2019", "February", "March", "April"]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          147.5755355,
          144.5883686,
          147.7797382,
          154.2233905,
          154.1568045,
          156.993245
        ],
        fill: false
      },
      {
        label: "Coin 2",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          201.8453906,
          203.8535863,
          201.3635496,
          215.1970949,
          221.411309,
          215.6012194
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 2",
      fontSize: 30,
      fontColor: "#d4af37"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 240,
            min: 140,
            stepSize: 20
          }
        }
      ]
    }
  }
}

var ctx = document.getElementById("canvas5").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})

// coin2-6M js end

//coin1-1Y js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = [
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "2019",
  "February",
  "March",
  "April"
]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          174.5835863,
          174.663082,
          170.6447724,
          162.4924253,
          161.6283537,
          165.9843375,
          148.4817616,
          146.0479499,
          144.5883686,
          147.7797382,
          154.2233905,
          154.1568045,
          156.993245
        ],
        fill: false
      },
      {
        label: "Coin 2",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          209.2750916,
          212.4770083,
          221.349132,
          210.083345,
          187.43985,
          200.586374,
          201.84539,
          203.853586,
          201.3635496,
          215.1970949,
          221.411309,
          215.60121
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 2",
      fontSize: 30,
      fontColor: "#d4af37"
    },
    tooltips: {
      mode: "index",
      intersect: false
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 240,
            min: 140,
            stepSize: 20
          }
        }
      ]
    }
  }
}

var ctx = document.getElementById("canvas2").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})

//coin1-1Y js end
