import React, {Component} from 'react';
import '../styles/about.css';

class About extends Component {
	render() {
		const { aboutData } = this.props;

		return (
			<div className="section section-about">
				<div className="background"></div>
				<div className="background-color"></div>
				<div className="title">{aboutData.title}</div>
				<div className="about-body">
					
				</div>
			</div>
		)
	}
	
}

export default About;