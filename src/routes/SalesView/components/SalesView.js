import React from 'react';
import SalesMapView from './SalesMapView';

class SalesView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <div className="row card">
                        <div className="col-md-12">
                            <strong style={{fontSize: '24px'}}>Hot Zones</strong>
                        </div>
                    </div>
                </div>
                <SalesMapView/>
            </div>
        )
    }
}

export default SalesView