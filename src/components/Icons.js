import React, {Component} from 'react';
import '../styles/icons.css';

class Icons extends Component {
	render() {
		const {iconData} = this.props;
		const icons = iconData.map((icon, index) => {
			return (
				<div className="icon" key={index}>
					<img className="icon-image" src={"https://icongr.am/devicon/"+icon.devicon+".svg"} alt={icon.name}/>
					<div className="icon-name subtitle">{icon.name}</div>
				</div>
			);
		});

		return icons;
	}
}

export default Icons;