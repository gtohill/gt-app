import React from 'react';




// text for h1 in hero text box 
const hero_h1 = {
	fontSize: '1.5em',
	fontWeight: 'bold'

};

// text for p in hero text box 
const hero_p ={
	fontSize: '2em'
};



function Hero(props){
	return(
		<div className={props.heroContainer} >					
			<img className={props.heroImageStyle} src={props.heroImage} alt={props.alt}/>
			<div className={props.heroTextContainer} >
				<h1 className="display-5">{props.heroHeadline}</h1>
				<p className="h2">{props.heroText}</p>						
			</div>					
		</div>

		)
	}

export default Hero;