google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
        var data = google.visualization.arrayToDataTable([
        ['year','Wildfire', 'Shifting agriculture', 'Forestry', 'Urbanization', 'Commodity driven deforestation', { role: 'annotation' } ],
          ['2001', 2.15, 2.78, 4.63, 0.194, 3.40, ''],
          ['2002', 16.3, 2.94, 4.78, 0.171, 4.30, ''],
          ['2003', 3.83, 2.21, 4.23, 0.153, 3.95, ''],
          ['2004', 5.04, 2.55, 6.30, 0.223, 5.61, ''],
          ['2005', 3.51, 3.08, 6.01, 0.217, 5.13, ''],
          ['2006', 3.79, 2.93, 5.96, 0.232, 4.58, ''],
          ['2007', 3.46, 3.37, 6.27, 0.218, 4.91, ''],
          ['2008', 3.88, 3.31, 6.20, 0.187, 4.86, ''],
          ['2009', 2.50, 3.70, 5.45, 0.145, 5.02, ''],
          ['2010', 3.13, 3.98, 5.90, 0.168, 5.19, ''],
          ['2011', 3.42, 3.09, 5.84, 0.148, 4.91, ''],
          ['2012', 6.09, 3.89, 6.66, 0.174, 6.45, ''],
          ['2013', 6.55, 4.49, 5.24, 0.134, 4.05, ''],
          ['2014', 5.75, 5.88, 6.10, 0.164, 5.67, ''],
          ['2015', 4.40, 4.51, 5.58, 0.153, 4.89, ''],
          ['2016', 5.69, 7.44, 7.74, 0.203, 8.45, ''],
          ['2017', 6.38, 7.96, 7.91, 0.239, 6.72, ''],
          ['2018', 6.36, 6.23, 6.85, 0.192, 4.99, ''],
          ['2019', 5.56, 5.74, 7.14, 0.173, 5.41, ''],
        ]);
        var formatter = new google.visualization.NumberFormat(
        { pattern:'#.00 Mha'});
        var formatter2 = new google.visualization.NumberFormat(
        { pattern:'0.000 Mha'});
        formatter.format(data,1);
        formatter.format(data,2);
        formatter.format(data,3);
        formatter2.format(data,4);
        formatter.format(data,5);
        var options = {
        width: 1100,
        height: 450,
        legend: { position: 'center', maxLines: 3 },
        chartArea:{left:40,top:0,width:'70%',height:'65%'},
        bar: { groupWidth: '75%' },
        hAxis:{format:'# Mha'},
        isStacked: true
      };

        var chart = new google.visualization.BarChart(document.getElementById('noAura'));

        chart.draw(data, options);
      }
