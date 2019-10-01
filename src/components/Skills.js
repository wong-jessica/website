import React from 'react';
import Icons from './Icons';
import '../styles/skills.css';

const SkillDisplay = ({sections}) => {
	const skillSections = sections.map(section => {
		return (
			<div className="skill-section" key={section.title}>
				<div className="skill-section-title title">{section.title}</div>
				<div className="skill-section-body">
					<Icons iconData={section.data} iconLabel="true" />
				</div>
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