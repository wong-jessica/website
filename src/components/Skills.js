import React, {Component} from 'react';
import '../styles/skills.css';

const Icons = props => {
	const icons = props.skillData.icons.map((icon, index) => {
		return (
			<div className="skill" key={index}>
				<img className="skill-image" src={"https://icongr.am/devicon/"+icon.devicon+".svg"} alt={icon.name}/>
				<div className="skill-name">{icon.name}</div>
			</div>
		);
	});
	return icons;
}

class Skills extends Component {
	render() {
		const { skillData } = this.props;

		return (
			<div className="section section-skills">
				<div className="section-title title">{skillData.title}</div>
				<div className="skill-body body">
					<Icons skillData={skillData} />
				</div>
			</div>
		)
	}
	
}

export default Skills;