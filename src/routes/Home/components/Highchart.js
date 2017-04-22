var React = require('react');
var Highcharts = require('highcharts');


class Highchart extends React.Component {
    componentDidMount() {
        Highcharts.chart('chart-container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Sample'
            },
            xAxis: {
                categories: ['Route 1', 'Route 2', 'Route 3']
            },
            yAxis: {
                title: {
                    text: 'Cost Reached'
                }
            },
            series: [{
                name: 'XPO',
                data: [1, 0, 4]
            }, {
                name: 'Others',
                data: [5, 7, 3]
            }]
        });
    }

    render() {
        return (
            <div>
                <div id="chart-container">
                </div>
            </div>
        );
    }
}

export default Highchart
