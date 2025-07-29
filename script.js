function calcularIMC() {
  const peso = parseFloat(document.getElementById('peso').value);
  const altura = parseFloat(document.getElementById('altura').value);
  if (!peso || !altura) return alert('Completa peso y altura');

  const imc = peso / (altura * altura);
  let categoria = '';

  if (imc < 18.5) categoria = 'Bajo peso';
  else if (imc < 24.9) categoria = 'Normal';
  else if (imc < 29.9) categoria = 'Sobrepeso';
  else categoria = 'Obesidad';

  document.getElementById('resultadoIMC').textContent = `Tu IMC es ${imc.toFixed(2)} (${categoria})`;

  mostrarGraficoIMC(imc);
}

function mostrarGraficoIMC(imc) {
  const ctx = document.getElementById('graficoIMC').getContext('2d');
  if (window.imcChart) window.imcChart.destroy();

  window.imcChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Bajo peso', 'Normal', 'Sobrepeso', 'Obesidad'],
      datasets: [{
        label: 'Rango IMC',
        data: [18.5, 24.9, 29.9, 35],
        backgroundColor: ['#88c', '#8c8', '#cc8', '#c88']
      },
      {
        label: 'Tu IMC',
        data: [imc, 0, 0, 0],
        backgroundColor: ['#0077aa']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

function calcularFrecCardiaca() {
  const edad = parseInt(document.getElementById('edad').value);
  if (!edad) return alert('Ingresa tu edad');

  const fcm = 220 - edad;
  const zonaMin = Math.round(fcm * 0.5);
  const zonaMax = Math.round(fcm * 0.85);

  document.getElementById('resultadoFrec').textContent =
    `Tu frecuencia cardíaca objetivo está entre ${zonaMin} y ${zonaMax} bpm.`;
}

function calcularDosis() {
  const peso = parseFloat(document.getElementById('pesoPaciente').value);
  const dosis = parseFloat(document.getElementById('dosisMgKg').value);
  if (!peso || !dosis) return alert('Completa todos los datos');

  const total = peso * dosis;
  document.getElementById('resultadoDosis').textContent =
    `Dosis total: ${total.toFixed(2)} mg`;
}
