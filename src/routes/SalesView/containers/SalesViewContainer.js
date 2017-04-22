import { connect } from 'react-redux'
import React from 'react'

import SalesView from '../components/SalesView.js'

class SalesViewContainer extends React.Component {

    render(){
        return (<SalesView/>)
    }
}

const mapStateToProps = (state)=>{
    return {
        counter: state.salesview.toString() || 100
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesView);

