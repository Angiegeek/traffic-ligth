import React from "react";

export function trafficLight() {
	return (
		<div id="traffictop">
			<div className="vl"></div>
			<div id="container">
				<div className="red light" />
				<div className="yellow light" />
				<div className="green light" />
			</div>
		</div>
	);
}
