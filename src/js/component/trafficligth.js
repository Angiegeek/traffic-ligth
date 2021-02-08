import React from "react";

export class TrafficLight extends React.Component {
	render() {
		return (
			<div id="traffictop">
				<div className="stickArea">
					<div className="vl"></div>
				</div>
				<div className="container">
					<div className="red light" />
					<div className="yellow light" />
					<div className="green light" />
				</div>
			</div>
		);
	}
}
