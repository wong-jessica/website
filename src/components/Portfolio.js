import React, {Component} from 'react';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import '../styles/portfolio.css';

const Projects = props => {
	const projects = props.portfolioData.projects.map((project, index) => {
		return (
				<div className="project" key={index}>
					<img src={project.displayImage} alt="Othello"/>
					<div className="project-overlay">
						<div className="project-title">{project.name}</div>
						<div className="project-skills">{project.skills}</div>
						<button type="button">LEARN MORE</button>
					</div>
				</div>
		);
	});
	return projects;
}

class Portfolio extends Component {
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