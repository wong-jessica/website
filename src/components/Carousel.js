import React, { Component } from 'react';
import '../styles/carousel.css';

function CarouselLeftArrow(props) {
	return (
		<div className="carousel-left" onClick={props.onClick}>
          <i className="fa fa-angle-left fa-3x"></i>
        </div>
	);
}

function CarouselRightArrow(props) {
	return (
		<div className="carousel-right" onClick={props.onClick}>
          <i className="fa fa-angle-right fa-3x"></i>
        </div>
	);
}

function CarouselSlide(props) {
	let image = props.carouselData[props.activeIndex];
	let background = {
		backgroundImage: `url(${image})`
	}

	return (
		<div className="carousel-slides" style={background}></div>
	);
}

class Carousel extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeIndex: 0
		};
	}


	goToPrevSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex -1;
		let { carouselData } = this.props;
		let len = carouselData.length;

		if (index < 0) {
			index = len-1;
		}

		this.setState({
			activeIndex: index
		});
	}

	goToNextSlide(e) {
		e.preventDefault();

		let index = this.state.activeIndex +1;
		let { carouselData } = this.props;
		let len = carouselData.length;

		if (index === len) {
			index = 0;
		}

		this.setState({
			activeIndex: index
		});
	}

	render() {
		const { carouselData } = this.props;
	
		return (
			<div className="carousel">
		      <CarouselSlide carouselData={carouselData} activeIndex={this.state.activeIndex} />
		      {carouselData.length !== 1 &&
				<div className="carousel-slides-overlay">
					<CarouselLeftArrow onClick={e => this.goToPrevSlide(e)}/>
					<CarouselRightArrow onClick={e => this.goToNextSlide(e)}/>
				</div>
			  }   
		    </div>
		)
	}
}

export default Carousel;