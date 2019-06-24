// coin7-6M js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["August", "September", "October", "November", "December", "2019"]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [161.97564, 163.6358, 149.4958, 147.5755, 145.3353, 147.0334],
        fill: false
      },
      {
        label: "Coin 7",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [202.7833, 199.4966, 180.17083, 186.50416, 187.9999, 193.7]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 7",
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
            max: 210,
            min: 140,
            stepSize: 10
          }
        }
      ]
    }
  }
}

var ctx = document.getElementById("canvas1").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})

// coin7-6M js end

//coin7-1Y js start

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
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "2019"
]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [
          171.055049,
          174.19158,
          174.82649,
          174.5835,
          169.2749,
          162.5648,
          161.97564,
          163.6358,
          149.4958,
          147.5755,
          145.3353,
          147.0334
        ],
        fill: false
      },
      {
        label: "Coin 7",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          183.8,
          180.3541,
          185.0866,
          188.4999,
          187.0958,
          193.21,
          202.7833,
          199.4966,
          180.17083,
          186.50416,
          187.9999,
          193.7
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 7",
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
            max: 210,
            min: 140,
            stepSize: 10
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

//coin7-1Y js end

//coin7-3Y js start

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
  "2016",
  "June",
  "October",
  "2017",
  "June",
  "October",
  "2018",
  "June",
  "Oct"
]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [
          139.4221,
          142.9081,
          143.90731,
          159.0888179,
          169.5566051,
          180.6029101,
          175.7761001,
          165.615384,
          148.4187616
        ],
        fill: false
      },
      {
        label: "Coin 7",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          128.9509,
          149.1813,
          146.8749,
          160.92647,
          172.06862,
          184.14531,
          184.47352,
          195.725,
          185.74285
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 7",
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
            max: 220,
            min: 100,
            stepSize: 20
          }
        }
      ]
    }
  }
}

var ctx = document.getElementById("canvas3").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})
//coin7-3Y js end

//coin7-MAX js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["2014", "2015", "2016", "2017", "2018", "2019"]
var config = {
  type: "line",
  data: {
    labels: MONTHS,
    datasets: [
      {
        label: "Reference",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [
          140.5921032,
          142.9522851,
          140.9642297,
          164.479112,
          164.2796042,
          147.03449
        ],
        fill: false
      },
      {
        label: "Coin 7",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [130.8235, 137.31891, 140.0176, 168.85031, 189.10224, 193.7]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 7",
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
            labelString: "Years"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 200,
            min: 120,
            stepSize: 10
          }
        }
      ]
    }
  }
}

var ctx = document.getElementById("canvas4").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})
//coin7-MAX js end

// graph js start

function openGraph(evt, graphName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent")
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tablinks = document.getElementsByClassName("tablinks")
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "")
  }
  document.getElementById(graphName).style.display = "block"
  evt.currentTarget.className += " active"
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click()

// graph js end
