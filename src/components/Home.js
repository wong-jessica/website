import React, { Component } from 'react';
import '../styles/home.css';

class Home extends Component {

	render() {
		const { homeData } = this.props;
		const greeting = homeData.greeting;
		const description = homeData.rotatingDescription[0];

		return (
			<div className="section-home">
				<div className="section-background-color"></div>
				<div className="section-background" style={{backgroundImage: `url(${homeData.background})`}}></div>
				<div className="greeting">
					<h3 className="subtitle">{greeting}</h3>
					<h1 className="title">{description}</h1>
					<a href="#1" className="scroll-down"><i className="fa fa-chevron-down fa-3x"></i></a>
				</div>
			</div>
		)
	}
}

export default Home;