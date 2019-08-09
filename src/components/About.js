import React, {Component} from 'react';
import '../styles/about.css';
import Carousel from "./Carousel";

class About extends Component {
	render() {
		const { aboutData } = this.props;

		return (
			<div className="section section-about">
				<div className="section-background"></div>
				<div className="section-background-color"></div>
				<div className="section-title title">{aboutData.title}</div>
				<div className="about-body body">
					<div className="about-body-images"><Carousel carouselData={aboutData.imageSlideshow} /></div>
					<div className="about-body-description">{aboutData.description}</div>
				</div>
			</div>
		)
	}
	
}

export default About;