
var myChart;
window.onchange = function() {
    if (myChart) {
        myChart.destroy();
    }
        
    var incomeData = [];
    var expenseData = [];

     
    for (var i = 0; i < 12; i++) {
        var month = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'][i];
      
        incomeData.push(document.getElementById(month + '-income').value);
        expenseData.push(document.getElementById(month + '-expense').value);
    }

    console.log(incomeData, expenseData);

    initializeChart(incomeData, expenseData);

    // Call resizeCanvas when the window is resized
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
};

function initializeChart(incomeData, expenseData) {
    var ctx = document.getElementById('myChart').getContext('2d');
    myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Income',
        data: incomeData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'Expense',
        data: expenseData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



  function resizeCanvas() {
    var canvas = document.getElementById('myChart');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // If you have a Chart.js instance on this canvas, you need to update it:
    myChart.resize();
  }
  
  