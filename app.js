// // Fetch Block
// function updateChart() {
async function fetchData() {
  const url = "./data.json";
  const response = await fetch(url);
  // wait until the request has been completed
  const datapoints = await response.json();
  return datapoints;
}

fetchData().then((datapoints) => {
  const days = datapoints.map(function (index) {
    return index.day;
  });
  const amounts = datapoints.map(function (index) {
    return index.amount;
  });
  // constmyChart.config.data.labels = days;
  // myChart.config.data.datasets[0].data = amounts;
  // myChart.update();
  return days, amounts;
});
// }
// updateChart();

// setup
const data = {
  labels: days,
  datasets: [
    {
      label: "Spending - Last 7 days",
      data: amounts,
      backgroundColor: [],
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawOnChartArea: false,
        },
        border: {
          display: false,
        },
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

// Instantly assign Chart.js version
const chartVersion = document.getElementById("chartVersion");
chartVersion.innerText = Chart.version;
