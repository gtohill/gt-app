import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const text_color = {
	color: '#25003a'
};

export class Footer extends Component {
	render() {
		return (
			<HashRouter>
			<div>
				<div className="footer-navbar">
				 	<nav className="navbar navbar-expand-lg navbar bg">
					  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
					  </button>		
					  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
					    <ul className="navbar-nav">	      
					      <li className="nav-item">
					        <NavLink to='/' className="nav-link" style={text_color}>HOME</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to='/portfolio' className="nav-link" style={text_color}>PORTFOLIO</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to="contact" className="nav-link" style={text_color}>CONTACT</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to="/insight" className="nav-link" style={text_color} href="#">INSIGHT</NavLink>
					      </li>
					    </ul>
					  </div>
					</nav>
				</div>
				<SocialMedia />
			</div>
			</HashRouter>
		);
	}
}

export default Footer;
