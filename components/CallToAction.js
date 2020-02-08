import React, { Component } from "react";
import styled from "styled-components";
import { Button } from "antd";

const CallToAction = styled(Button)`
	 {
		background-color: #9800ff;
		border: 0;
		color: #fff;
		font-size: 16px;
		margin: 15px auto;
	}
`;

export default class CallToAction extends Component {
	render() {
		return <CallToAction size="large">Do you wanna hear more about us?</CallToAction>;
	}
}
