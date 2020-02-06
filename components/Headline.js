import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

export default class Headline extends Component {
	static propTypes = {
		prop: PropTypes
	};

	render() {
		const HeadingContainer = styled.div``;

		const Heading = styled.h2`
			 {
				position: static;
				left: 0%;
				top: 20%;
				right: 0%;
				bottom: auto;
				display: inline-block;
				height: auto;
				margin-top: 0px;
				margin-right: 10px;
				margin-bottom: 0px;
				font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
					"Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
				color: #fff;
				font-size: 96px;
				line-height: 86px;
				font-weight: 300;
				text-align: left;
				text-decoration: none;
			}
		`;
		const ParagraphContainer = styled.div``;
		const Paragraph = styled.p``;
		const heading = this.props.heading;
		const paragraph = this.props.paragraph;

		return (
			<Row className="headline">
				<HeadingContainer>
					<Heading className="heading" data-aos="fade-up">
						{heading}
					</Heading>
				</HeadingContainer>
				<ParagraphContainer>
					<Paragraph className="paragraph" data-aos="fade-up">
						{paragraph}
					</Paragraph>
				</ParagraphContainer>
			</Row>
		);
	}
}

Headline.propTypes = {
	heading: PropTypes.string,
	description: PropTypes.string
};
