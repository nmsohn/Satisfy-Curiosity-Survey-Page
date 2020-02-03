import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout, Row } from "antd";

export default class Headline extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		return (
			<Row className="headline">
				<h2 className="heading">{this.props.heading}</h2>
				<p className="paragraph">{this.props.description}</p>
			</Row>
		);
	}
}

Headline.propTypes = {
	heading: PropTypes.string,
	description: PropTypes.string
};
