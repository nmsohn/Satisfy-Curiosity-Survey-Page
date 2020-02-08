import React, { Component } from "react";
import { Section } from "../../components/StyledComponents";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import { Row, Col } from "antd";
import styled from "styled-components";
import SocialHandle from "../../components/SocialHandle";

export default class Contact extends Component {
	render() {
		const title = "Contact Us";
		const content = "While our team is working on building a platform, join our facebook group or contact us for more about our service!";
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

		return (
			<Section className="section-contact component last-component">
				<HeadLine>
					<Heading title={title} />
					<ParagraphContainer>
						<Row>
							<Paragraph paragraph={content} />
							<Col xs={24} sm={24} md={24} lg={12} xl={12}>
								<SocialHandle span={24} />
							</Col>
						</Row>
					</ParagraphContainer>
				</HeadLine>
			</Section>
		);
	}
}
