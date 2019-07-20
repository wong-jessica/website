import React, {Component} from 'react'
import Table from './Table'

class App extends Component {
	render() {
		const employees = [
			{
				name: 'Jessica',
				job: 'Coder',
			},
			{
				name: 'Jeannie',
				job: 'Cook',
			},
		]


		return (
			<div className = "App">
				<h1>Hello, world!</h1>
				<Table data={employees}/>
			</div>
		)
	}
}


export default App