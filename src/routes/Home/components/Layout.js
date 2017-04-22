import React from 'react';
import Highchart from './Highchart';
import BasicBarChart from './BasicBarChart';
import PieChart from './PieChart';
import Maps from './MapView';

class Layout extends React.Component {
	render() {
		return(
			<div>
				<div className="card row form-group">
					<div className="col-md-6">
						<label className="row col-md-12">Origin City</label>
						<select className="form-control" value="Colorado">
							<option>Colorado</option>
						</select>
					</div>
					<div className="col-md-6">
						<label className="row col-md-12">Destination City</label>
						<select className="form-control" value="Kentucky">
							<option>Kentucky</option>
						</select>
					</div>
				</div>
				<div className="layout">
				<div className="row form-group">
					<div className="col-md-12">
						<Maps />
					</div>
				</div>
				<div className="row form-group">
					<div className="col-md-6">
						<BasicBarChart 
						chartId="barchart-container-1"/>
					</div>
					<div className="col-md-6">
						<BasicBarChart 
						chartId="barchart-container-2"/>
					</div>
				</div>
				<div className="row form-group">
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
			</div>
		);
	}
}
export default Layout;