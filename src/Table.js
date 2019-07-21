import React, {Component} from 'react';

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Remove</th>
			</tr>
		</thead>
	);
}

const TableBody = props => {
	const rows = props.tabledata.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.tableRemove(index)}>Delete</button>
				</td>
			</tr>
		);
	});

	return <tbody>{rows}</tbody>;
}

class Table extends Component {
	render() {
		const {data, remove} = this.props;

		return (
			<table>
				<TableHeader />
				<TableBody tabledata={data} tableRemove={remove}/>
			</table>
		);
	}
}

export default Table;