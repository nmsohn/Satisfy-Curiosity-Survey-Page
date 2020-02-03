import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Row } from "antd"

export default class Headline extends Component {
	static propTypes = {
		prop: PropTypes
	}

	render() {
		return (
			<Row className="headline">
				<h2 className="heading">{/*header prop*/}</h2>
				<p className="paragraph">{/*description prop*/}</p>
			</Row>
		)
	}
}
