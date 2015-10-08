google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
    var data = google.visualization.arrayToDataTable([
        ['Incident Borough', 'Response Time'],
        ["Manhattan", 248],
        ["Bronx", 245],
        ["Staten Island", 270],
        ["Brooklyn", 212],
        ['Queens', 260]
    ]);

    var options = {
        title: 'Average Response Time of Fire Stations in New York (2009-2010)',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Time (Seconds)',
            minValue: 0
        },
        vAxis: {
            title: 'Incident Borough'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}