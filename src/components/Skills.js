import React, {Component} from 'react';
import Icons from './Icons';
import '../styles/skills.css';


class Skills extends Component {
	render() {
		const { skillData } = this.props;

		return (
			<div className="section section-pad section-skills">
				<div className="section-title title">{skillData.title}</div>
				<div className="skill-body body">
					<div className="icons">
						<Icons iconData={skillData.icons} />
					</div>
				</div>
			</div>
		)
	}
}

export default Skills;