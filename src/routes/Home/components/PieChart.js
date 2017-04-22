import React from 'react';
import Highcharts from 'highcharts';


class PieChart extends React.Component {
	componentDidMount() {
		const props = this.props;
		Highcharts.chart(props.chartId, {
		    chart: {
		        plotBackgroundColor: null,
		        plotBorderWidth: null,
		        plotShadow: false,
		        type: 'pie',
		        height: 300
		    },
		    title: {
		        text: props.title
		    },
		    tooltip: {
		        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		    },
		    plotOptions: {
		        pie: {
		            allowPointSelect: true,
		            cursor: 'pointer',
		            dataLabels: {
		                enabled: true,
		                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                style: {
		                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                }
		            }
		        }
		    },
		    series: [{
		        name: 'Rates',
		        colorByPoint: true,
		        data: [{
		            name: 'Route Atlanta to Chester 13%',
		            y: 56.33
		        }, {
		            name: 'Others',
		            y: 24.03,
		            sliced: true,
		            selected: true
		        }]
		    }]
		});
	}
	render() {
		return (
			<div>
                <div id={this.props.chartId}>
                </div>
            </div>
		);
	}
}

export default PieChart