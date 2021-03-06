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
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
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
        data: [201.84539, 203.85358, 201.36354, 215.19709, 221.4113, 215.60121]
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
            max: 250,
            min: 50,
            stepSize: 50
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

// coin2-6M js end

//coin2-1Y js start

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
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
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
          209.27509,
          212.47701,
          221.34913,
          210.08334,
          187.43985,
          200.58637,
          201.84539,
          203.85358,
          201.36354,
          215.19709,
          221.4113,
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

//coin2-1Y js end

//coin2-3Y js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["2017", "June", "October", "2018", "June", "Oct", "2019", "April"]
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
          159.0888179,
          169.5566051,
          180.6029101,
          175.7761001,
          165.615384,
          148.4187616,
          155.572197,
          145.6339756
        ],
        fill: false
      },
      {
        label: "Coin 2",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          192.1774549,
          209.30617,
          217.3576,
          210.6429,
          212.477,
          200.58637,
          215.19709,
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

var ctx = document.getElementById("canvas3").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})
//coin2-3Y js end

//coin2-MAX js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"]
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
          137.3591873,
          139.1316794,
          140.5921032,
          142.9522851,
          140.9642297,
          164.479112,
          164.2796042,
          152.4546931
        ],
        fill: false
      },
      {
        label: "Coin 2",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          90.87109,
          90.51416,
          109.2227,
          132.42308,
          176.30395,
          207.50608,
          208.15119,
          213.86494
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
            labelString: "Years"
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            max: 220,
            min: 80,
            stepSize: 20
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
//coin2-MAX js end

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
