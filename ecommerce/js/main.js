$(document).ready(function () {
	$('.chart').highcharts({
		chart: {
            type: 'line',
            backgroundColor: '#fec35a',
            height: 289,
            style: { "font-family": "\'PT Sans\'"},
        },
        xAxis: {
            categories: ['MON','TUE','WED','THU','FRI','SAT','SUN'],
            lineColor: "#b0752a",
            tickWidth: 0,
            labels: {
            	style: {"color":"#b0752a"}
            }
        },
        yAxis: {
        	visible: false
        },
        series: [{
            data: [0, 30, 50, 80, 50, 40, 60]
        }],
        credits: {
        	enabled: false
        },
        legend: {
        	enabled: false
        },
        title: {
        	align: "left",
        	text: "Sales This Week",
        	style: { "color": "#fff", "font-size":"21px", "font-weight":"bold"},
        	x: 20,
        	y: 30
        },
        colors: ['#fff'],
    });
    $('.menue-btn').click(function(){
    	$(this).toggleClass('close');
    	$(this).next().slideToggle(300);
    })
})