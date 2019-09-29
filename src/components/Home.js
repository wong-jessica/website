import React, { Component } from 'react';
import '../styles/home.css';
// import TypeWriter from './TypeWriter.js';

class Home extends Component {

	render() {
		const { homeData } = this.props;
		const greeting = homeData.greeting;
		const description = homeData.rotatingDescription[0];

		return (
			<div className="section section-home">
			
				<div className="section-background-color"></div>
				<div className="section-background" style={{backgroundImage: `url(${homeData.background})`}}></div>
				<div className="greeting">
					<h3 className="subtitle">{greeting}</h3>
					<h1 className="title">{description}</h1>
				</div>
				<div><a href="#1" className="scroll-down" aria-label="Scroll to next section"><i className="fa fa-chevron-down fa-3x"></i></a></div>
			</div>
		)
	}
}
					// <h1 className="title"><TypeWriter toWrite={homeData.rotatingDescription} /></h1>

export default Home;