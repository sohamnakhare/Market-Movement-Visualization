import React from 'react';
import SalesMapView from './SalesMapView';

class SalesView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <SalesMapView/>
            </div>
        )
    }
}

export default SalesView