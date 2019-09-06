import React, {Component} from 'react';
import '../styles/contact.css';

const Footer = props => {
	const footerContact = props.contactData.icons.map((contact, index) => {
		return (
			<span title={contact.toolTip} key={index}><a href={contact.url} aria-label={contact.toolTip} className="section-icon"><i className={contact.className}></i></a></span>
		);
	});
	return footerContact;
}

class Contact extends Component {
	render() {
		const { contactData } = this.props;

		return (
			<div className="section section-contact">
				<div className="section-footer">
					<Footer contactData={contactData} />
					<div className="credits subtitle">COPYRIGHT © 2019 <a href="mailto:jessikw@uci.edu">JESSICA WONG</a></div>
				</div>
			</div>
		);
	}
				// <div className="section-title title">{contactData.title}</div>
				// <div className="body">{contactData.message}</div>
	
}

export default Contact;