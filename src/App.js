import './App.css';
import React, { useState, useEffect } from 'react';
import serviceTypes from './serviceTypes';

function App() {
	const [task, setTask] = useState({
		title: 'Web portal',
		credits: 12,
		services: [],
		requirements: {
			security: 3,
			speed: 3,
			stability: 3,
		},
		status: {
			security: 0,
			speed: 0,
			stability: 0,
		}
	});

	useEffect(() => {
		console.log('bonus checks', task);

	}, [task]);

	const pickService = ({cost, ...service}) => () => {
		const status = task.status;
		const newCredit = task.credits - cost;
		const services = [service, ...task.services];
		Object.keys(service).map(key => status[key] = status[key] + service[key]);
		setTask({...task, services, credits: newCredit, status})
	}

	return (
		<div className="App">
			<div>
				<div className="box">{task.title}</div>
				<div className="service-container">
					<div>AWS box</div>
					{Object.keys(serviceTypes.aws).map((key) => (
						<div key={key} className="service-box" onClick={pickService(serviceTypes.aws[key])}>
							{key}
						</div>
					))}
				</div>
				<div className="service-container">
					<div>Azure box</div>
					{Object.keys(serviceTypes.azure).map((key) => (
						<div key={key} className="service-box">
							{key}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
