import React, {Component} from 'react';
import '../styles/skills.css';

class Skills extends Component {
	render() {
		const { skillData } = this.props;

		return (
			<div className="section section-skills">
				<div className="section-title title">{skillData.title}</div>
			</div>
		)
	}
	
}

export default Skills;