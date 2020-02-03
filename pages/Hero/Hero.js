import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "antd";
import Typewriter from 'typewriter-effect';

const Section = Layout;

export default class Hero extends Component {
	render() {
		return (
			<Section className="section-hero">
					<h2>
						<span>Discover local</span>
						<Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('lessons')
							.pauseFor(1500)
							.deleteAll()
							.typeString('classes')
							.pauseFor(1500)
							.deleteAll()
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
