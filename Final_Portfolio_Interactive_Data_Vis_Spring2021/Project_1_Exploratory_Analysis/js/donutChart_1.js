google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Russia',     20.09],
      ['United States',      17.12],
      ['Canada',  11.30],
      ['Brazil', 9.41],
      ['Indonesia',    8.63],
      ['other', 33.45]
    ]);

    var options = {
      pieHole: 0.4,
      width:800,
      height:500,
      legend: { position: 'right', maxLines: 3 },
      chartArea:{left:10, top:0},
      colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6', '#f9dcd1']
    };

    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }