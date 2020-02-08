import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import SocialHandle from "../../components/SocialHandle";
import { Row, Col } from "antd";

const Section = styled.div`
	 {
		display: flex;
		position: relative;
		left: 0%;
		top: 0%;
		right: 0%;
		bottom: auto;
		z-index: 2;
		min-height: 80vh;
		align-items: center;
		display: flex;
		padding-right: 32px;
		padding-left: 32px;
		-webkit-box-align: center;
		background-color: #000;
		color: #fff;
	}
`;

const TitleRow = styled(Row)`
	width: 100%;
`;

const TitleCol = styled(Col)`
	{
		width:100%;
	}
`;

const Title = styled.h2`
	 {
		display: block;
		margin: 0 auto;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-flex: 0;
		-webkit-flex: 0 auto;
		-ms-flex: 0 auto;
		flex: 0 auto;
		font-size: 5em;
		text-transform: uppercase;
		line-height: 80px;
		font-weight: 300;
		text-align: center;
		color: #17ffa6;
		font-family: 'Anton';
	}
`;

const TopTitle = styled.span`
{
	color: #28b4d7;
}`;

const BottomTitle = styled.span`
{
	color: #c23369;
}`;

export default class Hero extends Component {
	render() {
		return (
			<Section className="section-hero component first-component">
				<TitleRow>
					<TitleCol span={24}>
						<Title>
							<TopTitle>Discover Local</TopTitle>
							<Typewriter
									options={{
										loop: true
									}}
									onInit={(typewriter) => {
										typewriter
											.typeString("Lessons")
											.pauseFor(1500)
											.deleteAll()
											.typeString("Classes")
											.pauseFor(1500)
											.deleteAll()
											.typeString("Events")
											.pauseFor(1500)
											.start();
									}}
								/>
							<BottomTitle>Today!</BottomTitle>
						</Title>
					</TitleCol>
					<SocialHandle span={24} />
				</TitleRow>
				
			</Section>
		);
	}
}
