import React from 'react';

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