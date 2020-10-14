import React from 'react';

const bkgrdColor = {
	backgroundColor: '#25003a'
};

const video_wrapper= {
	backgroundColor: '#25003a',
	margin:'auto',
	width:'50%',
	height: '50%',
	padding: '4% 0 4% 0'	
};

const video = {
	width: '40%',
	height: '25%',
	margin: '0 auto',
	paddingTop:'3em'
};

const email_list ={
	margin: '0 auto',
	width: '66%',
	paddingTop:'50px'
};

const video_email_input ={
	width:'100%'
};

const video_button = {
	width: '100%',
	backgroundColor: 'orange',
	border: 'orange solid 2px',
	borderRadius: '2px',
	color: 'white'
};


class Video extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			email:''
			};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		}
	

	handleSubmit(event){	
		alert('Thank you for submitting your email: '+this.state.email);
		event.preventDefault();
	}

	handleChange(event){
		this.setState({
			email: event.target.value
		});
	}

	render(){
		return(
			<div style={bkgrdColor} className="container-fluid">
				<div className="row">
					<div style={video_wrapper}>
						<div className="embed-responsive embed-responsive-16by9 video">
					  		<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/tgbNymZ7vqY"> YOUTUBE</iframe>
						</div>
						<div style={email_list}>
							<h4 style={{color:'white', textAlign: 'center'}}>Receive the latest news in Full Stack Development</h4>
							<form className="email-form" onSubmit={this.handleSubmit}>
								<input style={video_email_input} type="text" value={this.state.email} name="email" onChange={this.handleChange} placeholder="enter email" />
								<input style={video_button} type="submit" value="SEND ME UPDATES" />						
							</form>
						</div>
					</div>
				</div>	
			</div>
			)}
}

export default Video;