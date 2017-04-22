import React from 'react';
import Highchart from './Highchart';
import BasicBarChart from './BasicBarChart';
import PieChart from './PieChart';
import Maps from './MapView';
import InfoCards from './InformationCard';
import ComparisonChart from './ComparionChart';

class Layout extends React.Component {
	
	render() {
		const data = {
            "source": "Channelview",
            "destination": "Odessa",
            "cost": {
                "value": 2.45,
                "marketMin": 1.68,
                "marketAvg": 1.77,
                "marketMax": 1.83

            },
            "price": {
                "value": 2.44,
                "marketMin": 1.99,
                "marketAvg": 1.09,
                "marketMax": 2.20
            }  
        }
        const comdata={
        	"volume":[1],
        	"profit":[1.5]
        }
		return(
			<div>
				<div className="card row form-group">
					<div className="col-md-6">
						<label className="row col-md-12">Origin City</label>
						<select className="form-control" value="Channelview">
							<option>Channelview</option>
						</select>
					</div>
					<div className="col-md-6">
						<label className="row col-md-12">Destination City</label>
						<select className="form-control" value="Odessa">
							<option>Odessa</option>
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
								param="price"
								chartId="barchart-container-1"
								title="Avg. Price per mile"
								data={data.price}
							/>
						</div>
						<div className="col-md-6">
							<BasicBarChart 
								param="cost"
								chartId="barchart-container-2"
								title="Avg. Cost per mile"
								data={data.cost}
							/>
						</div>
					</div>
					<div>
						<ComparisonChart
							chartId="comparison-container-1"
							title="Volume vs Profit Contribution"
							data={comdata}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default Layout;