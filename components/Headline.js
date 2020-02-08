import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import styled from "styled-components";

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
		const HeadingContainer = styled.div``;

		const Heading = styled.h2`
			 {
				position: static;
				left: 0%;
				right: 0%;
				bottom: auto;
				display: inline-block;
				height: auto;
				margin-top: 0px;
				margin-right: 10px;
				margin-bottom: 0px;
				font-family: Anton;
				color: #fff;
				font-size: 96px;
				line-height: 86px;
				font-weight: 300;
				text-align: left;
				text-decoration: none;
			}
		`;
		const ParagraphContainer = styled.div`
			 {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
					'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
				line-height: 26px;
				font-weight: 300;
				margin-top: 10px;
			}
		`;
		const Paragraph = styled.p`
			margin-top: 24px;
			margin-bottom: 0px;
			margin-right: 10px;
			padding-right: 24px;
			padding-left: 0px;
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
			color:
			#999;
			font-size: 19px;
			font-weight: 300;
			text-align: left;
			letter-spacing: 0.5px;
		`;
		const heading = this.props.heading;
		const description = this.props.description;
		const description2 = this.props.description2;

		return (
			<HeadLine className="headline">
				<HeadingContainer>
					<Heading
						className="heading"
						data-aos="fade-up"
						data-aos-offset="200"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-once="false"
					>
						{heading}
					</Heading>
				</HeadingContainer>
				<ParagraphContainer>
					<Row>
						<Col xs={24} sm={24} md={24} lg={12} xl={12}>
							<Paragraph
								className="description"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"
							>
								{description}
							</Paragraph>
						</Col>
						<Col xs={24} sm={24} md={24} lg={12} xl={12}>
							<Paragraph
								className="description2"
								data-aos="fade-up"
								data-aos-offset="200"
								data-aos-delay="50"
								data-aos-duration="1000"
								data-aos-easing="ease-in-out"
								data-aos-once="false"
							>
								{description2}
							</Paragraph>
						</Col>
					</Row>
				</ParagraphContainer>
			</HeadLine>
		);
	}
}

Headline.propTypes = {
	heading: PropTypes.string
};
