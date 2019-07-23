import React, { Component } from 'react';
import '../styles/navigation.css'

class Navigation extends Component {
	navToggle = () => {
		const links = document.querySelector('.navbar');
		if (links.className === "navbar") {
			links.className += " collapse";
		} else {
			links.className = "navbar";
		}
	}

	render() {
		const { navData } = this.props;
		const links = navData.map((link, index) => {
			return (
				<a className="nav-links" key={index} href={link.url} onClick={this.navToggle}>{link.name}</a>
			);
		});

		return (
			<div className="navbar">
				<nav>
					{links}
					<i className="nav-collapse-icon fa fa-bars fa-2x" onClick={this.navToggle}></i>
				</nav>
			</div>
		)
	}
}

export default Navigation;