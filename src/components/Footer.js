import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import {
  NavLink,
  HashRouter
} from "react-router-dom";

require('../css/footer-style.css');


export class Footer extends Component {
	render() {
		return (
			<HashRouter>
			<footer className="gt-footer">
				<div className="footer-navbar">
				 	<nav className="navbar navbar-expand-lg navbar bg">
					  <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
					  </button>		
					  <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
					    <ul className="navbar-nav">	      
					      <li className="nav-item">
					        <NavLink to='/' className="nav-link footer-text-color " >HOME</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to='/portfolio' className="nav-link footer-text-color" >PORTFOLIO</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to="contact" className="nav-link footer-text-color" >CONTACT</NavLink>
					      </li>
					      <li className="nav-item">
					        <NavLink to="/insight" className="nav-link footer-text-color" href="#">INSIGHT</NavLink>
					      </li>
					    </ul>
					  </div>
					</nav>
				</div>
				<SocialMedia />
			</footer>
			</HashRouter>			
		);
	}
}

export default Footer;
