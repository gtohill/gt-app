import React, { Component } from 'react';

		
const social_wrapper = {
	backgroundColor: 'white',
	height: '100%',
	margin:'3em',
	textAlign: 'center'
};

const social_row = {
	paddingTop:'10px'
};

const social_wrapper_i = {
	fontSize:'1.5vw'
};
		


class SocialMedia extends Component {
	render() {
		return (
			<div style={social_wrapper}>
				<div style={social_row} className="row">
					<div className="col-md-4"></div>
					<div className="col-md-1"><a style={{color:'grey'}} href="www.twitter.com"><i className="fab fa-twitter"></i></a></div>
					<div className="col-md-1"><a style={{color:'grey'}} href="www.facebook.com"><i className="fab fa-facebook-square"></i></a></div>
					<div className="col-md-1"><a style={{color:'grey'}} href="www.linkedin.com"><i className="fab fa-linkedin"></i></a></div>
					<div className="col-md-1"><a style={{color:'grey'}} href="www.instagram.com"><i className="fab fa-instagram"></i></a></div>				
				</div>
			</div>
		);
	}
}
export default SocialMedia;
