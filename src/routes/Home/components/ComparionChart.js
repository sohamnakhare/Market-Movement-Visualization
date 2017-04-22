var React = require('react');
var Highcharts = require('highcharts');


class comparisonChart extends React.Component {
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
                text: 'This chart shows the volume Contribution and profit contribution of this route'
            },
            xAxis: {
                categories: ["For the route selected"],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
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
                name: 'Volume Contribution',
                data: [props.data.volume]//, data.cost]

            }, {
                name: 'Profit Contribution',
                data: [props.data.profit]//, data.marketMinCost]

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

export default comparisonChart
