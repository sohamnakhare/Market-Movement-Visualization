import React from 'react'
import { IndexLink, Link } from 'react-router'
import XPOLogo from './XPO-logo-positive.svg'
import './Header.scss'

class Header extends React.Component {

  render() {
    return(
      <nav className="navbar navbar-default header-xpo">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            <img src={XPOLogo}/>
            <span> | Market Movement Visualization</span>
          </a>
        </div>
        <ul className="nav navbar-right navbar-nav">
          <li><a href="#">For Sales Team</a></li>
          <li><a href="#">For Pricing Team</a></li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Header

 // <div>
  //   <h1>React Redux Starter Kit</h1>
  //   <IndexLink to='/' activeClassName='route--active'>
  //     Home
  //   </IndexLink>
  //   {' · '}
  //   <Link to='/counter' activeClassName='route--active'>
  //     Counter
  //   </Link>
  // </div>