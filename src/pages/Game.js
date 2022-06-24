import React, { useState, useEffect } from 'react';
import serviceTypes from '../serviceTypes';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Service } from '../components/Service';
import { StatusBar } from '../components/StatusBar';

const basicTask= {
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
};

const Game = () => {
	const [task, setTask] = useState(basicTask);

	const checkBonusAchieved = (task) => {
		// check cluster bonus
		if (!task.bonuses.find(name => name === 'cluster') && task.services.filter(service => service.name === 'ec2').length >= 2) {
			NotificationManager.success('You have at least 2 services running (+1 stability, +1 speed)', 'Cluster bonus', 1000);
			const status = { ...task.status, stability: task.status.stability + 1, speed: task.status.speed + 1 };
			setTask({ ...task, status, bonuses: [...task.bonuses, 'cluster'] });
		}
		// check IAM bonus
		// check ONE BEYOND bonus
		if (!task.bonuses.find(name => name === 'oneBeyond') && task.services.filter(service => service.name === 'ec2').length >= 2) {
			NotificationManager.success('You are above at least 1 point in every requirement (double your points)', 'The ONE BEYOND Bonus', 3000);
			setTask({ ...task, bonuses: [...task.bonuses, 'oneBeyond'] });
		}
	};

	const checkWinConditionAchieved = (task) => {
		if (Object.keys(task.requirements).reduce((acc, key) => {
			if (task.requirements[key] > task.status[key]) acc = false;
			return acc;
		}, true)) {
			const speedPoints = task.status.speed - task.requirements.speed > 0 ? task.status.speed - task.requirements.speed : 0;
			const stabilityPoints = task.status.stability - task.requirements.stability > 0 ? task.status.stability - task.requirements.stability : 0;
			const securityPoints = task.status.security - task.requirements.security > 0 ? task.status.security - task.requirements.security : 0;
			const points = task.credits + speedPoints + stabilityPoints + securityPoints;
			const times = task.bonuses.find(bonus => bonus === 'oneBeyond') ? 2 : 1
			NotificationManager.success(`You won the game with ${points*times} points`, 'Successful deployment', 1000);
			setTask(basicTask);
		}
	};

	useEffect(() => {
		checkBonusAchieved(task);
		checkWinConditionAchieved(task);
	}, [task]);

  const pickService =
    ({ cost, ...service }) =>
    () => {
      const status = task.status;
      const newCredit = task.credits - cost;
      const services = [service, ...task.services];
      Object.keys(service).map((key) => (status[key] = status[key] + service[key]));
      setTask({ ...task, services, credits: newCredit, status });
    };

  return (
    <div className="App">
      <div>
        <div className="box">
          <div className="task-service-container">services</div>
          <div className="status-bar-services-wrapper">
            <div className="status-bar-services">
              {[...task.services].slice(0, 6).map((service) => (
                <div key={service.name} className="status-bar-services-item">
                  <Service key={service.name} service={service}>
                    {service.name}
                  </Service>
                </div>
              ))}
            </div>

            <div className="status-bar">
              <StatusBar status={task.status.speed} name="speed" />
              <StatusBar status={task.status.security} name="security" />
              <StatusBar status={task.status.stability} name="stability" />
            </div>
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
