var React = require('react');
var Highcharts = require('highcharts');


class BasicBarChart extends React.Component {
    componentDidMount() {
        Highcharts.chart('chart-container', {
            chart: {
                type: 'column',
                backgroundColor: '#f7f7f7'
            },

            title: {
                text: 'Comparision'
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Price',
                    'Cost'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Freight Cost / Mile'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} m</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'XPO',
                data: [50, 70]//, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'Minimum',
                data: [45, 62]//, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
                name: 'Average',
                data: [52, 74]//, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
                name: 'Maximum',
                data: [56, 80]//, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

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

export default BasicBarChart
