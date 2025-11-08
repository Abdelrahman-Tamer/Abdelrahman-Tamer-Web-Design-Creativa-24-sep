const revenueCtx = document.getElementById("revenueChart");
if (revenueCtx) {
  new Chart(revenueCtx, {
    type: "bar",
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "Revenue",
          data: [50, 40, 15, 45, 35, 48, 65],
          backgroundColor: "#0d6efd",
          borderRadius: 5,
          borderSkipped: false,
          barThickness: 30,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#6c757d",
            font: {
              size: 14,
              family: "Arial, sans-serif",
            },
          },
        },
        y: {
          beginAtZero: true,
          max: 80,
          ticks: {
            stepSize: 20,
            color: "#adb5bd",
            font: {
              size: 13,
              family: "Arial, sans-serif",
            },
          },
          grid: {
            color: "#e9ecef",
            lineWidth: 1,
          },
        },
      },
    },
  });
}

const appointmentsCtx = document.getElementById("appointmentsChart");
if (appointmentsCtx) {
  new Chart(appointmentsCtx, {
    type: "bar",
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "Appointments",
          data: [25, 15, 20, 60, 90, 40, 110],
          backgroundColor: "#0d6efd",
          borderRadius: 8, 
          borderSkipped: false, 
          barThickness: 30, 
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: {
            color: "#6c757d",
            font: { size: 14, family: "Arial, sans-serif" },
          },
        },
        y: {
          beginAtZero: true,
          max: 120,
          ticks: {
            stepSize: 20,
            color: "#adb5bd",
            font: { size: 13, family: "Arial, sans-serif" },
          },
          grid: { color: "#e9ecef", lineWidth: 1 },
        },
      },
    },
  });
}

/* Scroll to Top Circle Progress */
var toTop = document.getElementById("toTop");
if (toTop) {
  toTop.value = 0;
  toTop.max = 100;
  toTop.style.display = "none";
}