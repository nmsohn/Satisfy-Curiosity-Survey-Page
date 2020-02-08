import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import styled from "styled-components";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

export default class Headline extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		const HeadLine = styled.div`
		{
			margin-left: auto;
			margin-right: auto;
			max-width: 940px;
			position: static;
			display: block;
		}`;

		const ParagraphContainer = styled.div`
		{
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
				'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
			line-height: 26px;
			font-weight: 300;
			margin-top: 10px;
			}
		`;

		const heading = this.props.heading;
		const description = this.props.description;
		const description2 = this.props.description2;

		return (
			<HeadLine className="headline">
				<Heading title={heading} />
						
				<ParagraphContainer>
					<Row>
						<Paragraph paragraph={description} />
						<Paragraph paragraph={description2} />
					</Row>
				</ParagraphContainer>
			</HeadLine>
		);
	}
}

Headline.propTypes = {
	heading: PropTypes.string
};
