var React = require('react');
var Highcharts = require('highcharts');


class BasicBarChart extends React.Component {
    componentDidMount() {
        const props = this.props;
        Highcharts.chart(props.chartId, {
            chart: {
                type: 'column'
            },

            title: {
                text: props.title
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                categories: [
                    'Per mile data'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Freight '+props.param+' / Mile'
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
                data: [props.data.value]//, data.cost]

            }, {
                name: 'Minimum',
                data: [props.data.marketMin]//, data.marketMinCost]

            }, {
                name: 'Average',
                data: [props.data.marketAvg]//, data.marketAvgCost]

            }, {
                name: 'Maximum',
                data: [props.data.marketMax]//, data.marketMaxCost]

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

export default BasicBarChart
