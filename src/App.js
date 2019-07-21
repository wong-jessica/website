import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
	state = {
		employees: [
			{
				name: 'Jessica',
				job: 'Coder',
			},
		],
	}

	removeEmployee = index => {
		const {employees} = this.state;

		this.setState({
			employees: employees.filter((employee, i) => {
				return i !== index
			}),
		});

	}

	render() {
		// const employees = [
		// 	{
		// 		name: 'Jessica',
		// 		job: 'Coder',
		// 	},
		// 	{
		// 		name: 'Jeannie',
		// 		job: 'Cook',
		// 	},
		// ]
		const {employees} = this.state;

		return (
			<div className = "App">
				<h1>Hello, world! Website underconstruction</h1>
				<Table data={employees} remove={this.removeEmployee}/>
			</div>
		);
	}
}


export default App;