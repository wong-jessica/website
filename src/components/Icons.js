import React from 'react';
import '../styles/icons.css';

const IconDisplay = ({icon, iconLabel}) => {
	const link = `https://icongr.am/${icon.icongram}.svg?size=25`;
	
	if(iconLabel === "true") {
		return (
			<div className="icon-label"><img className="icon-image" src={link} alt={icon.name}/>{icon.name}</div>
		)
	}
	return (
		<>
			<img className="icon-image" src={link} alt={icon.name}/>
			<div className="icon-name subtitle">{icon.name}</div>
		</>
	)
}

const Icons = ({iconData, iconLabel}) => {
	return iconData.map((icon, index) => (
		<div className="icon" key={index}>
			<IconDisplay icon={icon} iconLabel={iconLabel} />
		</div>
	));
}

export default Icons;