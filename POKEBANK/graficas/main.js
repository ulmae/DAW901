const graficaBalance = document.getElementById("balance");
const graficaIngresos = document.getElementById("ingresos");
const graficaGastos = document.getElementById("gastos");
const meses = ["Enero","Febrero","Marzo","Abril","Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre","Noviembre","Diciembre"]
const valoresDePrueba = [620,562,145,852,423,562,425,425,369,123,152,652];
new Chart(graficaBalance,{
    type: 'bar',
    data: {
      labels: meses,
      datasets: [{
        label: 'Balance a Fin de Mes',
        data: valoresDePrueba,
        borderWidth: 0,
        backgroundColor: "#ac9158"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend : {
            display: false
        },
        title: {
            text: 'Balance a Fin de Mes', 
            display: true
        }
      }
    }
});
new Chart(graficaIngresos,{
    type: 'line',
    data: {
      labels: meses,
      datasets: [{
        label: 'Ingresos por mes',
        data: valoresDePrueba,
        borderWidth: 0,
        borderColor: "#58ac95",
        backgroundColor: "#58ac95",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend : {
            display: false
        },
        title: {
            text: 'Ingresos por mes', 
            display: true
        }
      }
    }
})
new Chart(graficaGastos,{
    type: 'line',
    data: {
      labels: meses,
      datasets: [{
        label: 'Gastos por mes',
        data: valoresDePrueba,
        borderWidth: 0,
        backgroundColor: "#ac588d",
        borderColor: "#ac588d",
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend : {
            display: false
        },
        title: {
            text: 'Gastos por mes', 
            display: true
        }
      }
    }
})