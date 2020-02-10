import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const CallToActionButton = styled(Button)`
	background-color: #9800ff;
	border: 0;
	color: #fff;
	font-size: 16px;
	margin: 15px auto;

	&:hover {
		background-color: #9800ff;
		color: #fff;
		opacity: 0.6;
	}
`;

export default class CallToAction extends Component {
	render() {
		return <CallToActionButton size="large">Take a Survey</CallToActionButton>;
	}
}
