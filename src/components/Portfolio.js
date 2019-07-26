import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import JwModal from './JwModal';
import Carousel from 'nuka-carousel';
import '../styles/portfolio.css';

const Projects = props => {
	const projects = props.portfolioData.projects.map((project, index) => {
		return (
				<div className="project" key={index}>
					<img src={project.displayImage} alt="Othello"/>
					<div className="project-overlay">
						<div className="project-title">{project.name}</div>
						<div className="project-skills">{project.skills}</div>
						<button onClick={JwModal.open(index)}>LEARN MORE</button>
					</div>
					<JwModal id={index}>
						<div className="slideshow-images">
							<Carousel onClick={ReactDOM.render()}>
								{project.imageSlideshow.map(function(image, index) {
									return <img src={image} key={index} alt="unable" />;
								})}
							</Carousel>
						</div>
						{project.description}
						{index}
						<button onClick={JwModal.close(index)}>CLOSE</button>
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
				<div className="background"></div>
				<div className="background-color"></div>
				<div className="title">{portfolioData.title}</div>
				<div className="portfolio-body">
					<Projects portfolioData={portfolioData} />
				</div>
				

			
			</div>
		)
	}
	
}

export default Portfolio;