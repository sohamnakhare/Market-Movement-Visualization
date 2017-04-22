import React from 'react'
import Header from '../../components/Header'
import './CoreLayout.scss'
import '../../styles/core.scss'

class CoreLayout extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render(){
    return(
      <div>
        <Header />
        <div className='container-fluid'>
          <div className='core-layout__viewport'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
