import React, { Component } from "react";
import { FacebookSquare } from "styled-icons/boxicons-logos/FacebookSquare";
import { Mail } from "styled-icons/material/Mail";
import styled from "styled-components";
import { Col } from "antd";
import _JSXStyle from "styled-jsx/style";

const SocialCol = styled(Col)`
	 {
		width: 100%;
		display: flex;
	}
`;

const FacebookIcon = styled(FacebookSquare)`
	color: "#fff";
`;

const MailIcon = styled(Mail)`
	color: "#fff";
	padding-left: 5px;
`;

export default class SocialHandle extends Component {
	render() {
		return (
			<SocialCol span={24}>
				<div className="icon-container">
					<a href="https://tinyurl.com/wellingtonskillshare" style={{ color: "#fff" }}>
						<FacebookIcon size={38} />
					</a>
					<a href="mailto:skillsharenz@gmail.com" style={{ color: "#fff" }}>
						<MailIcon size={40} />
					</a>
					<style jsx>
						{`
							margin: 20px auto;
							align-items: center;
						`}
					</style>
				</div>
			</SocialCol>
		);
	}
}
