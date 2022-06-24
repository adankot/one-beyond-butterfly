import React from "react";
import './StatusBar.css'

export const StatusBar = (props) => {
	const { status, name } = props;

	return (
		<div className="progress-bar">
			<div className="empty" style={{ width: 100 }}></div>
			<div className="progress" style={{ width: status * 10 }}></div>
			<div className="name" style={{ width: 100 }}>{name}</div>
		</div>
	);
};
