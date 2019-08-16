import React, {Component} from 'react';


class Paragraphs extends Component {
	render() {
		const { paragraphData } = this.props;
		
		const paragraphs = paragraphData.map((paragraph, index) => {
			return (
				<p key={index}>{paragraph}</p>
			);
		});

		return paragraphs;
	}	
}

export default Paragraphs;