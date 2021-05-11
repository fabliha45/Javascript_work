google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Natural Forest',     29.8],
      ['Plantation',      1.1],
      ['Non-Forest',  69.1],
   
    ]);

    var options = {
      pieHole: 0.4,
      width:800,
      height:500,
      legend: { position: 'right', maxLines: 3 },
      chartArea:{left:10, top:0},
      colors: ['rgb(80, 105, 23)', 'rgb(160, 199, 70)', 'rgb(231, 229, 164)']
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
  }
