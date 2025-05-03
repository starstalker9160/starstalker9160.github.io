document.addEventListener('DOMContentLoaded', () => {
    const dataDict = {
      "github": 4,
      "grades": 2,
      "extracurriculars": 3,
      "SAT": 0,
      "IELTS": 4.5
    };
  
    const fillColor = 'rgba(54, 162, 235, 0.2)';
    const outlineColor = 'rgba(54, 162, 235, 1)';
  
    const labels = Object.keys(dataDict);
    const values = Object.values(dataDict);
  
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: labels,
        datasets: [{
          label: 'My Dataset',
          data: values,
          backgroundColor: fillColor,
          borderColor: outlineColor,
          borderWidth: 2,
          pointBackgroundColor: outlineColor
        }]
      },
      options: {
        responsive: true,
        scales: {
          r: {
            min: 0,
            max: 5,
            ticks: {
              stepSize: 1
            },
            beginAtZero: true
          }
        }
      }
    });
  });