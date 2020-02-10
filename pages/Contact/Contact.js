import React, { Component } from "react";
import _JSXStyle from "styled-jsx/style";
import Heading from "../../components/Heading";
import { Row, Col } from "antd";
import styled from "styled-components";
import SocialHandle from "../../components/SocialHandle";
import Paragraph from "../../components/Paragraph";

const title = "Contact Us";
const content = "If you want to hear more about us, join our facebook group or contact us via email.";

export default class Contact extends Component {
	render() {
		return (
			<div className="section-contact component last-component">
				<div className="headline">
					<Heading title={title} />
					<div className="paragraph-container">
						<Row>
							<Paragraph paragraph={content} />
							<Col xs={24} sm={24} md={24} lg={12} xl={12}>
								<SocialHandle span={24} />
							</Col>
						</Row>
					</div>
				</div>
				<style jsx>
					{`
						.component {
							display: flex;
							position: relative;
							left: 0%;
							top: 0%;
							right: 0%;
							bottom: auto;
							z-index: 2;
							min-height: 90vh;
							align-items: center;
							display: flex;
							padding-right: 32px;
							padding-left: 32px;
							-webkit-box-align: center;
							background-color: #fff;
							color: #000;
						}
						.headline {
							margin-left: auto;
							margin-right: auto;
							max-width: 940px;
							position: static;
							display: block;
						}
						.paragraph-container {
							font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
								Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
							line-height: 26px;
							font-weight: 300;
							margin-top: 10px;
						}
					`}
				</style>
			</div>
		);
	}
}
