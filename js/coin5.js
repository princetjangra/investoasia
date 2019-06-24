// coin5-6M js start

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
      // {
      //   label: "Reference",
      //   backgroundColor: window.chartColors.orange,
      //   borderColor: window.chartColors.orange,
      //   data: [
      //     144.5883686,
      //     147.7797382,
      //     154.2233905,
      //     154.1568045,
      //     156.993245,
      //     145.6339756
      //   ],
      //   fill: false
      // },
      {
        label: "Coin 5",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [169.9969, 178.61472, 184.5071, 186.6557, 188.250244, 194.0533]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 5",
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
            min: 165,
            stepSize: 5
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

// coin5-6M js end

//coin5-1Y js start

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
      // {
      //   label: "Reference",
      //   backgroundColor: window.chartColors.orange,
      //   borderColor: window.chartColors.orange,
      //   data: [
      //     174.663082,
      //     170.6447724,
      //     162.4924253,
      //     161.6283537,
      //     165.9843375,
      //     148.4817616,
      //     146.0479499,
      //     144.5883686,
      //     147.7797382,
      //     154.2233905,
      //     154.1568045,
      //     156.993245,
      //     145.6339756
      //   ],
      //   fill: false
      // },
      {
        label: "Coin 5",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          150.87349,
          149.08929,
          148.39083,
          151.2786,
          158.68207,
          160.74591,
          169.9969,
          178.61472,
          184.5071,
          186.6557,
          188.250244,
          194.0533
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 5",
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
            min: 120,
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

//coin5-1Y js end

//coin5-3Y js start

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
      // {
      //   label: "Reference",
      //   backgroundColor: window.chartColors.orange,
      //   borderColor: window.chartColors.orange,
      //   data: [
      //     159.0888179,
      //     169.5566051,
      //     180.6029101,
      //     175.7761001,
      //     165.615384,
      //     148.4187616,
      //     155.572197,
      //     145.6339756
      //   ],
      //   fill: false
      // },
      {
        label: "Coin 5",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          126.9442,
          129.38477,
          134.03712,
          148.58387,
          149.93872,
          167.1856,
          175.23426,
          188.58751
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 5",
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
//coin5-3Y js end

//coin5-MAX js start

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
      // {
      //   label: "Reference",
      //   backgroundColor: window.chartColors.orange,
      //   borderColor: window.chartColors.orange,
      //   data: [
      //     116.43529,
      //     138.9312089,
      //     140.6461051,
      //     137.3591873,
      //     139.1316794,
      //     140.5921032,
      //     142.9522851,
      //     140.9642297,
      //     164.479112,
      //     164.2796042,
      //     152.4546931
      //   ],
      //   fill: false
      // },
      {
        label: "Coin 5",
        fill: false,
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          106.6815,
          128.3286,
          163.5448,
          173.04893,
          144.35636,
          130.09715,
          118.59891,
          127.4266,
          128.45509,
          152.37677,
          186.77427
        ]
      }
    ]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Coin 5",
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
//coin5-MAX js end

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
