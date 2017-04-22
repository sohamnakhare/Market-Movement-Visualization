import React from 'react';
import Highchart from './Highchart';
import BasicBarChart from './BasicBarChart';
import PieChart from './PieChart';
import Maps from './MapView';
import InfoCards from './InformationCard';
import ComparisonChart from './ComparionChart';
import _ from 'lodash';

class Layout extends React.Component {
  constructor(props){
      super(props);
      this.state={
      cities:[
        {lat:39.5501, lng: -105.7821, name:"Colorado"},
        {lat:41.350239, lng: -74.25783, name:"Chester"},
        {lat:33.74089, lng: -84.563616 , name: "Atlanta"}
        ]
      }
      this.state.source=this.state.cities[0].name;
      this.state.destination=this.state.cities[1].name;
      this.changeSource = this.changeSource.bind(this);
      this.changeDestination = this.changeDestination.bind(this);
      this.findcityobj = this.findcityobj.bind(this);
    }

    changeSource(event){
          this.setState({source: event.target.value});
          console.log("source changed to",event.target.value)
    }

    changeDestination(event){
          this.setState({destination: event.target.value});
          console.log("destination changed to",event.target.value)
    }

    findcityobj(name){
          var city = _.find(this.state.cities, function(o) { return o.name == name; });
          console.log("found",city);
          return city;
    }

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
						<select className="form-control" value={this.state.source} onChange={this.changeSource}>
              {this.state.cities.map((item) => (
                    <option value={item.name}> {item.name}</option>
                ))}
            </select>
					</div>
					<div className="col-md-6">
						<label className="row col-md-12">Destination City</label>
						<select className="form-control" value={this.state.destination} onChange={this.changeDestination}>
              {this.state.cities.map((item) => (
                      <option value={item.name}> {item.name}</option>
                  ))}
            </select>
					</div>
				</div>
				<div className="layout">
					<div className="row form-group">
						<div className="col-md-12">
							<Maps source={this.findcityobj(this.state.source)} destination={this.findcityobj(this.state.destination)}/>
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
