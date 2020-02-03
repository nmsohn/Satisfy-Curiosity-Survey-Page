import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "antd"
import Headline from '../../components/Headline'

const Section = Layout;

export default class Feature extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		const title = "Feature";
		const description = "feature description";

		return (
			<Section className="section-feature">
				<Headline title={title} description={description}></Headline>
			</Section>
		)
	}
}
