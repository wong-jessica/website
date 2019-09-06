import React, { Component } from 'react';
import '../styles/navigation.css'

class Navigation extends Component {
	navToggle = () => {
		const links = document.querySelector('.nav-collapse-links');
		if (links.className === "nav-collapse-links") {
			links.className += " collapse";
		} else {
			links.className = "nav-collapse-links";
		}
	}

	render() {
		const { navData } = this.props;
		const expandedLinks = navData.map((link, index) => {
			return (
				<a className="nav-links nav-expand" key={index} href={link.url}>{link.name}</a>
			);
		});
		const collapsedLinks = navData.map((link, index) => {
			return (
				<a className="nav-links" key={index} href={link.url} onClick={this.navToggle}>{link.name}</a>
			);
		});

		return (
			<div className="navbar sticky">
				{expandedLinks}
				<div className="nav-collapse">
					<i className="fa fa-bars fa-2x" onClick={this.navToggle}></i>
					<div className="nav-collapse-links">{collapsedLinks}</div>
				</div>
			</div>
		)
	}
}

export default Navigation;