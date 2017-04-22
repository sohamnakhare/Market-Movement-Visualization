import React from 'react';


class InformationCard extends React.Component {
	render() {
		return(
			<div className="row">
				<div className="col-md-4">
					<div className="info-card">
							<div className="col-md-6">
							hellos
							</div>
							<div className="col-md-6">
							</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="info-card">
						<div className="row">
							<div className="col-md-4 card-icon-2">icon</div>
							<div className="col-md-8">
								<h3>Avg. Billing Distance</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="info-card">
						<div className="row">
							<div className="col-md-4 card-icon-3">icon</div>
							<div className="col-md-8">
								<h3>Avg. Cost</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default InformationCard