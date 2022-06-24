import React, { useState, useEffect } from 'react';
import serviceTypes from '../serviceTypes';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Service } from '../components/Service';
import { StatusBar } from '../components/StatusBar';

const Game = () => {
	const [task, setTask] = useState({
		title: 'Web portal',
		credits: 12,
		services: [],
		bonuses: [],
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

	const checkBonusAchieved = (task) => {
		// check cluster bonus
		if (!task.bonuses.find(name => name === 'cluster') && task.services.filter(service => service.name === 'ec2').length >= 2) {
			NotificationManager.success('You have at least 2 services running (+1 stability, +1 speed', 'Cluster bonus', 1000);
			const status = { ...task.status, stability: task.status.stability + 1, speed: task.status.speed + 1 };
			setTask({ ...task, status, bonuses: [...task.bonuses, 'cluster'] });
		}
		// check IAM bonus
		// check ONE BEYOND bonus
	};

	useEffect(() => {
		checkBonusAchieved(task);
	}, [task]);

	const pickService = ({ cost, ...service }) => () => {
		const status = task.status;
		const newCredit = task.credits - cost;
		const services = [service, ...task.services];
		Object.keys(service).map(key => status[key] = status[key] + service[key]);
		setTask({ ...task, services, credits: newCredit, status })
	}

	return (
		<div className="App">
			<div>
				<div className="box">
					<div className="service-container">
						services
					</div>
					<div className="status-bar">
						<StatusBar status={task.status.speed} />
						<StatusBar status={task.status.security} />
						<StatusBar status={task.status.stability} />
					</div>
				</div>
				<div className="service-container">
					<div>AWS box</div>
					{serviceTypes.aws.map((service) => (
						<Service key={service.name} onClick={pickService(service)} service={service}>
							{service.name}
						</Service>
					))}
				</div>
				<div className="service-container">
					<div>Azure box</div>
					{serviceTypes.azure.map((service) => (
						<Service key={service.name} onClick={pickService(service)} service={service}>
							{service.name}
						</Service>
					))}
				</div>
			</div>
			<NotificationContainer />
		</div>
	);
};

export default Game;
