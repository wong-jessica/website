import React, { Component } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import websiteData from './websiteData.json';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// websiteData: websiteData,
			websiteData: JSON.parse(this.props.appData),
		};
	}


	render() {
		return (
			<div className="App">
				<div id="0" />
				<Home homeData={this.state.websiteData['home']} /> 
				<Navigation navData={this.state.websiteData['navigation']} />
				<div id="1" />
				<About aboutData={this.state.websiteData['about']} />
				<div id="2" />
				<Portfolio portfolioData={this.state.websiteData['portfolio']} />
				<div id="3" />
				<Skills skillData={this.state.websiteData['skills']} />
				<div id="4" />
				<Contact contactData={this.state.websiteData['contact']} />
			</div>
		)
	}
}


export default App;