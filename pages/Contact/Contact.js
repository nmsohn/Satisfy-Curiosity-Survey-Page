import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout } from "antd"
import Headline from '../../components/Headline'

const Section = Layout;

export default class Contact extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		const title = "Feature2";
		const description = "feature2 description";

		return (
			<Section className="section-feature2">
				<Headline title={title} description={description}></Headline>
			</Section>
		)
	}
}
