// coin3-6M js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["December", "2019", "February", "March", "April", "May"]
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
          144.5883686,
          147.7797382,
          154.2233905,
          154.1568045,
          156.993245,
          145.6339756
        ],
        fill: false
      },
      {
        label: "Coin 3",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [166.18, 177.39, 179.73, 183.75, 195.94, 192.13]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 3",
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

// coin3-6M js end

//coin3-1Y js start

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
  "April",
  "May"
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
          156.993245,
          145.6339756
        ],
        fill: false
      },
      {
        label: "Coin 3",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          158.4,
          158.04,
          159.44,
          161.7,
          158.31,
          162.79,
          166.18,
          177.39,
          179.73,
          183.75,
          195.94,
          192.13
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 3",
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

var ctx = document.getElementById("canvas2").getContext("2d")
var lineChart = new Chart(ctx, {
  type: "line",
  data: config.data,
  options: config.options
})

//coin3-1Y js end

//coin3-3Y js start

window.chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(231,233,237)"
}

var MONTHS = ["2017", "June", "October", "2018", "June", "Oct", "2019", "May"]
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
        label: "Coin 3",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [129.03, 135.33, 139.59, 148.65, 158.4, 158.31, 179.73, 192.13]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 3",
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
            max: 200,
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
//coin3-3Y js end

//coin3-MAX js start

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
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
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
          116.43529,
          138.9312089,
          140.6461051,
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
        label: "Coin 3",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          109.82404,
          124.87,
          125.25,
          125.06,
          134.66,
          135.23,
          133.72,
          117.71,
          135.43,
          158.3,
          185.98
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 3",
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
            min: 100,
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
//coin3-MAX js end

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
