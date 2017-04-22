import React from 'react';
import Highchart from './Highchart';
import BasicBarChart from './BasicBarChart';
import PieChart from './PieChart';
import Maps from './MapView';

class Layout extends React.Component {
	render() {
		return(
			<div className="container layout">
				<div className="row">
					<div className="col-md-6">
						<BasicBarChart />
					</div>
					<div className="col-md-6">
						<Maps />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6">
						<PieChart 
						chartId="piechart-container-1"
						title="Contribution of overall trips"/>
					</div>
					<div className="col-md-6">
						<PieChart 
						chartId="piechart-container-2"
						title="Contribution of Profit"/>
					</div>
				</div>
			</div>	
		);
	}
}
export default Layout;