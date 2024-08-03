google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['1 stella',     2],
        ['2 stelle',      7],
        ['3 stelle',  15],
        ['4 stelle', 200],
        ['5 stelle',    345]
]);

var options = {
    title: 'Recensioni',
    is3D: false,
    
};


var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
chart.draw(data, options);
}