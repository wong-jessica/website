import React, {Component} from 'react';
import '../styles/contact.css';

const Contacts = props => {
	const contacts = props.contactData.icons.map((contact, index) => {
		return (
			<a href={contact.url} key={index} className="section-icon"><i className={contact.className}></i></a>
		);
	});
	return contacts;
}

class Contact extends Component {
	render() {
		const { contactData } = this.props;

				// <div className="body">{contactData.message}</div>
		return (
			<div className="section-contact">
				<div className="section-title title">{contactData.title}</div>
				<Contacts contactData={contactData} />
				<div className="credits subtitle">© 2019 <a href="mailto:jessikw@uci.edu">JESSICA WONG</a></div>
			</div>
		);
	}
	
}

export default Contact;