import React from 'react';

class SalesView extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        debugger;   
        return(
            <h1>Sales View {this.props.counter}</h1>
        )
    }
}

export default SalesView;