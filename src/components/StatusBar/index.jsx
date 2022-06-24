import React from "react";
import './StatusBar.css'

export const StatusBar = (props) => {
	const { status, name, requirement } = props;

	return (
		<div className="progress-bar">
			<div className="empty" style={{ width: 100 }}></div>
			<div className="requirement" style={{ width: requirement * 10 }}></div>
			<div className="progress" style={{ width: status < 10 ? status * 10 : 100 }}></div>
			<div className="name" style={{ width: 100 }}>{name}</div>
		</div>
	);
};
