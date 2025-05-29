document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".dropdown-toggle");

    toggles.forEach(toggle => {
      const dropdown = toggle.nextElementSibling;

      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        document.querySelectorAll(".custom-dropdown").forEach(dd => {
          if (dd !== dropdown) dd.classList.remove("show");
        });
        dropdown.classList.toggle("show");
      });
    });

    document.addEventListener("click", function () {
      document.querySelectorAll(".custom-dropdown").forEach(dd => {
        dd.classList.remove("show");
      });
    });
  });


const ctx = document.getElementById('stackedBarChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        label: 'Base',
        data: [5, 30, 25, 40, 45, 50],
        backgroundColor: 'green'
      },
      {
        label: 'Top',
        data: [3, 8, 5, 7, 6, 12],
        backgroundColor: 'navy'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 6    // 🔹 Smaller X-axis labels
          },
          maxRotation: 0,
          minRotation: 0
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 70,
        ticks: {
          font: {
            size: 6    // 🔹 Smaller Y-axis labels
          }
        }
      }
    }
  }
});

// Line Chart for time-series (like the curved green and blue line graph)
const lineCtx = document.getElementById('lineChart').getContext('2d');

new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: [
      '1-01', '11-01', '21-01', '31-01',
      '10-02', '20-02', '12-03', '22-03',
      '1-04', '11-04', '21-04', '1-05',
      '11-05', '21-05', '31-05', '10-06',
      '20-06', '30-06', '10-07', '20-07'
    ],
    datasets: [
      {
        label: 'Series A',
        data: [60, 110, 90, 50, 45, 65, 95, 135, 100, 90, 70, 95, 130, 80, 120, 105, 100, 75, 85, 95],
        borderColor: 'green',
        backgroundColor: 'transparent',
        tension: 0.4
      },
      {
        label: 'Series B',
        data: [55, 115, 80, 60, 50, 70, 85, 110, 105, 80, 90, 85, 120, 100, 110, 95, 110, 85, 90, 100],
        borderColor: 'blue',
        backgroundColor: 'transparent',
        tension: 0.4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      },
      y: {
        min: 0,
        max: 160,
        ticks: {
          stepSize: 20,
          font: {
            size: 10
          }
        }
      }
    }
  }
});


const uiCtx = document.getElementById('userInteractionsChart').getContext('2d');

new Chart(uiCtx, {
  type: 'bar',
  data: {
    labels: ['J', 'A', 'S', 'O', 'N', 'D', 'J', 'F', 'M', 'A', 'M', 'J'],
    datasets: [
      {
        type: 'bar',
        label: 'User Activity',
        data: [60, 80, 45, 90, 70, 100, 55, 75, 60, 95, 110, 70],
        backgroundColor: 'green',
        order: 2
      },
      {
        type: 'line',
        label: 'Trend',
        data: [70, 60, 90, 50, 100, 80, 60, 50, 90, 110, 100, 90],
        borderColor: 'blue',
        backgroundColor: 'transparent',
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
        order: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'User Interactions (trend)',
        font: {
          size: 14
        },
        color: '#444',
        padding: {
          bottom: 10
        }
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 10
          }
        }
      },
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          stepSize: 20,
          font: {
            size: 10
          }
        }
      }
    }
  }
});

