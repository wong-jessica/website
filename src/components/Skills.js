import React from 'react';
import Icons from './Icons';
import '../styles/skills.css';

const SkillDisplay = ({sections}) => {
	const skillSections = sections.map(section => {
		return (
			<div key={section.title}>
				<div className="skill-title title">{section.title}</div>
				<Icons iconData={section.data} iconLabel="true" />
			</div>
		);
	});
	return skillSections;
};

const Skills = ({skillData}) => {
	return (
		<div className="section section-pad section-skills">
				<div className="section-title title">{skillData.title}</div>
				<div className="skill-body body">
					<div className="skill-table">
						<SkillDisplay sections={skillData.sections} />
					</div>
				</div>
			</div>
	);
};

export default Skills;