import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import SocialHandle from "../../components/SocialHandle";
import { Row, Col } from "antd";
import { KeyboardArrowDown } from "styled-icons/material/KeyboardArrowDown";
import { useSpring, animated } from "react-spring";

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
		width: 100%;
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
		font-family: "Anton";
	}
`;

const TopTitle = styled.span`
	 {
		color: #fff;
	}
`;

const BottomTitle = styled.span`
	 {
		color: #fff;
	}
`;

const Sub = styled.p`
	 {
		color: #fff;
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
		line-height: 80px;
		font-weight: 300;
		text-align: center;
		font-size: 24px;
	}
`;

const Arrow = styled(KeyboardArrowDown)`
	 {
		color: #fff;
		line-height: 80px;
		font-weight: 300;
		text-align: center;
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
		animation: anim .35s ease-in alternate infinite;
      
		@keyframes anim {
		  0% {
			transform: translateY(0);
		  }
		  100% {
			transform: translateY(10px);
		  }
		}
	}
`;

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
								onInit={typewriter => {
									typewriter
										.typeString("Lessons")
										.pauseFor(1500)
										.deleteAll()
										.typeString("Classes")
										.pauseFor(1500)
										.deleteAll()
										.typeString("Events")
										.pauseFor(1500)
										.deleteAll()
										.typeString("Workshops")
										.pauseFor(1500)
										.start();
								}}
							/>
							<BottomTitle>Today!</BottomTitle>
						</Title>
					</TitleCol>
					<Sub>Find a new hobby or build up your skills with us!</Sub>
					<Arrow size={30} />
					<SocialHandle span={24} />
				</TitleRow>
			</Section>
		);
	}
}
