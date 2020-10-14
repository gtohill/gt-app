import React, { Component } from 'react';

const city_wrapper = {
	position:'relative',			
	margin:'auto',
	width:'100%',
	height: '100%'			
};

const city_img = {
	height:'100%',
	width:'100%'
};

const city_text = {
	position:'absolute',
	top: '20%',
    left: '40%',
    fontSize:'2vw'
};

const city_map = {
	position:'absolute',
	fontSize:'4vw',
	top: '2%',
    left: '50%',
	color:'orange'
};

const CITYIMAGE = require('../images/london-skyline.jpg');

export class Location extends Component {
	render() {
		return (
			<div class="row">
				<div style={city_wrapper}>	
					<img style={city_img} src={CITYIMAGE} alt="London, Ontario"/>
					<div style={city_map}><i className="fas fa-map-marker"></i></div>
					<div style={city_text}>My City - London, Ontario</div>
				</div>
			</div>
		);
	}
}

export default Location;
