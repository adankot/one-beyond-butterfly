import React from "react";
import './StatusBar.css'

export const StatusBar = (props) => {
	const { status } = props;

	if (props.currentStatus > 10) {
		return null;
	}

	return (
		<div>
			<div className="stability" style={{ width: status * 10 }}></div>
			<div className="speed" style={{ width: status * 10 }}></div>
		</div>
	);
};
