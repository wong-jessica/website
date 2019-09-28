import React, {Component} from 'react';
import JwModal from './JwModal';
import Carousel from './Carousel';
import Icons from './Icons';
import Paragraphs from './Paragraphs';
import '../styles/portfolio.css';

const Projects = props => {
	const projects = props.portfolioData.projects.map((project, index) => {
		const projectLinks = project.links.map(link => {
			return <a key={link.name} href={link.url}><button>{link.name.toUpperCase()}</button></a>
		});
		// console.log(projectLinks);
		
		const projectID = `project${index}`;

		return (
			<div className="project" key={projectID}>
				<img src={project.displayImage} alt="project"/>
				<div className="project-overlay">
					<div>
						<div className="project-title title">{project.name}</div>
						<div className="project-subtitle subtitle">{project.highlight}</div>
						<button onClick={JwModal.open(projectID)}>LEARN MORE</button>
					</div>
				</div>
				<JwModal id={projectID}>
					<div className="project-modal">
						<div className="project-images">
							<Carousel carouselData={project.imageSlideshow} />
						</div>
						<div className="project-details">
							<div className="project-header">
								<div className="project-title title">{project.name}</div>
								<div className="project-skills"><Icons iconData={project.skills} /></div>
							</div>
							<div className="project-body body"><Paragraphs paragraphData={project.description} /></div>
						</div>
						<div className="project-buttons">
							<div className="project-links">{projectLinks}</div>
							<button className="project-close" onClick={JwModal.close(projectID)}><i className="fa fa-times fa-2x"></i></button>
						</div>
					</div>
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
			<div className="section section-pad section-portfolio">
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