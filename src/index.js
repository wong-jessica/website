import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

var xhttp = new XMLHttpRequest();
var data = {};
xhttp.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
       // Typical action to be performed when the document is ready:
       data = JSON.parse(xhttp.responseText);
       ReactDOM.render(<App appData={JSON.stringify(data)}/>, document.getElementById('root'));
    }
};

xhttp.open("GET", `${process.env.PUBLIC_URL}/websiteData.json`, true);
xhttp.send();