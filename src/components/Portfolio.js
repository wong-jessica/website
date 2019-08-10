import React, {Component} from 'react';
// import ReactDOM from 'react-dom'; 
import JwModal from './JwModal';
import Carousel from './Carousel';
import '../styles/portfolio.css';

const Projects = props => {
	const projects = props.portfolioData.projects.map((project, index) => {
		return (
			<div className="project" key={index}>
				<img src={project.displayImage} alt="project"/>
				<div className="project-overlay">
					<div className="project-title title">{project.name}</div>
					<div className="project-skills subtitle">{project.skills}</div>
					<button onClick={JwModal.open(index)}>LEARN MORE</button>
				</div>
				<JwModal id={index}>
					<div className="project-images">
						<Carousel carouselData={project.imageSlideshow} />
					</div>
					<div className="project-details">
						<div className="project-details-title title">{project.name}</div>
						<div className="project-details-highlight subtitle">{project.highlight}</div>
						<div className="project-details-description body">{project.description}</div>
					</div>
					<a href="#" className="project-details-close" onClick={JwModal.close(index)}><i className="fa fa-times fa-2x"></i></a>
				</JwModal>
			</div>
		);
	});
	return projects;
}

class Portfolio extends Component 
{
	render() {
		const {portfolioData} = this.props;

		return (
			<div className="section section-portfolio">
				<div className="section-background"></div>
				<div className="section-background-color"></div>
				<div className="section-title title">{portfolioData.title}</div>
				<div className="portfolio-body">
					<Projects portfolioData={portfolioData} />
				</div>
				

			
			</div>
		)
	}
	
}

export default Portfolio;