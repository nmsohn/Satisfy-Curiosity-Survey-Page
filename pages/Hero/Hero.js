import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "antd";
import Typewriter from 'typewriter-effect';

const Section = Layout;

export default class Hero extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<Section className="section-hero">
					<h2>
						<span>Discover local</span>
						<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('lessons')
							.pauseFor(2500)
							.deleteAll()
							.typeString('classes')
							.pauseFor(2500)
							.typeString('events')
							.start();
						}}
						/>
						<span>today!</span>
					</h2>
			</Section>
		)
	}
}
