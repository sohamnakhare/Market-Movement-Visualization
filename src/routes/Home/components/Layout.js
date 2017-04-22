import React from 'react';
import Highchart from './Highchart';
import BasicBarChart from './BasicBarChart'

class Layout extends React.Component {
	render() {
		return(
			<div className="container layout">
				<div className="row">
					<div className="col-md-6">
						<BasicBarChart />
					</div>
					<div className="col-md-6">
					
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						display a table list here
					</div>
				</div>
			</div>	
		);
	}
}
export default Layout;