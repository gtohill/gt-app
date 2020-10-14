import React from 'react';


class Skills extends React.Component{

	render(){
		return(
			<div className="row py-5 bg-light">
				<div className="col-md-3">					
				</div>
				<div className="col-md-6">				
					<div className="text-center display-4">Gary Tohill, Freelance Full Stack Developer</div>
					<br/>
					<div className="text-justify h3">Talented Full Stack Web Developer with over 5 years experience
					   helping clients build user-friendly web based solutions.
					</div>
					<br/>
					<div className="text-justify h3">
						Advanced knowledge of ReactJS, PHP, Laravel, Java, MySQL, HTML5, and CSS3.
					</div>
					<br/>
					<div className="text-justify h3">
						Post Degree in Computer Science.
					</div>
					<br/>
					<div className="row h2">

						<div className="col-md-4">
							<div className="display-6">FRONT END</div>
							<ul className="h3">
								<li>ReactJS</li>
								<li>JavaScript</li>
								<li>HTML5</li>
								<li>CSS3</li>
							</ul>
						</div>
						<div className="col-md-4">
							<div className="display-6">BACK END</div>
						    <ul className="h3">
								<li>PHP</li>
							 	<li>Python</li>
							 	<li>Java</li>
							 </ul>					 
						</div>
						<div className="col-md-4">
							<div className="display-6">FRAMEWORKS</div>
							<ul className="h3">
								<li>Lavarel</li>
								<li>Django</li>
								<li>Spring</li>
								<li>Flask</li>						
							</ul>					
						</div>
					</div>				
				</div>				
			</div>	
			);
	}
}

export default Skills;
