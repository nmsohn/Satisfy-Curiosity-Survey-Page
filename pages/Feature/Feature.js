import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "antd";
import Typewriter from 'typewriter-effect';

const Section = Layout;

export default class Feature extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<Section className="section-feature">

			</Section>
		)
	}
}
