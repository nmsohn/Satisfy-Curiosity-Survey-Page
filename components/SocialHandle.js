import React, { Component } from "react";
import { FacebookSquare } from "styled-icons/boxicons-logos/FacebookSquare";
import { Mail } from "styled-icons/material/Mail";
import styled from "styled-components";
import { Col } from "antd";

const SocialCol = styled(Col)`
	 {
		width: 100%;
	}
`;

const FacebookIcon = styled(FacebookSquare)`
	margin: 20px auto;
	align-items: center;
	display: flex;
	color: "#fff";
`;

export default class SocialHandle extends Component {
	render() {
		return (
			<SocialCol span={24}>
				<a href="#" style={{ color: "#fff" }}>
					<FacebookIcon size={38} />
				</a>
			</SocialCol>
		);
	}
}
