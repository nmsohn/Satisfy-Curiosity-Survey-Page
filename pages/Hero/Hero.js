import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { KeyboardArrowDown } from 'styled-icons/material/KeyboardArrowDown';
import { Blob } from 'react-blob';
import _JSXStyle from 'styled-jsx/style';
import CallToAction from '../../components/CallToAction';

const TitleRow = styled(Row)`
	width: 100%;
`;

const TitleCol = styled(Col)`
	width: 100%;
`;

const BackgroundBlob = ({ style, props }) => (
	<Blob
		size="80vh"
		style={{
			position: 'absolute',
			top: '-30%',
			right: '-15%',
			zIndex: -1,
			// backgroundImage: "linear-gradient(to right, #4F41B8, #03A7C1)"
			backgroundImage: 'linear-gradient(135deg, #4F41B8 30%, #03A7C1 90%)',
			color: 'white',
			opacity: 0.2,
			fontSize: '50vh',
			...style
		}}
		{...props}
	/>
);

const BackgroundBlob2 = ({ style, props }) => (
	<Blob
		size="60vh"
		style={{
			position: 'absolute',
			bottom: '-30%',
			left: '-15%',
			zIndex: -1,
			// backgroundImage: "linear-gradient(to right, #4F41B8, #03A7C1)"
			backgroundImage: 'linear-gradient(135deg, #f79d00 30%, #64f38c 90%)',
			color: 'white',
			opacity: 0.2,
			fontSize: '50vh',
			...style
		}}
		{...props}
	/>
);

export default function Hero() {
	return (
		<div className="section-hero component first-component">
			<TitleRow className="title-row">
				<TitleCol span={24} className="title-col">
					<h2 className="title">
						<span style={{ color: '#000' }}>Discover Local</span>
						<Typewriter
							options={{
								loop: true
							}}
							onInit={typewriter => {
								typewriter
									.typeString('Lessons')
									.pauseFor(1500)
									.deleteAll()
									.typeString('Classes')
									.pauseFor(1500)
									.deleteAll()
									.typeString('Events')
									.pauseFor(1500)
									.deleteAll()
									.typeString('Workshops')
									.pauseFor(1500)
									.start();
							}}
						/>
						<span style={{ color: '#000' }}>Today!</span>
					</h2>
				</TitleCol>
				<p className="sub">Find a new hobby or build up your skills with us!</p>
				<span className="sub2">
					<span>Before we launch our platform,</span>
					<br />
					<span>
						please take a <a className="highlight">survey</a> to help us to improve our service 🙌
					</span>
				</span>
				<p className="arrow-down">
					<KeyboardArrowDown size={30} />
				</p>
				<div className="survey-button">
					<a className="cta-survey" href="https://tinyurl.com/nzskillshare2">
						<CallToAction />
					</a>
				</div>
			</TitleRow>
			<div>
				<BackgroundBlob />
				<BackgroundBlob2 />
			</div>

			<style jsx>
				{`
					.title {
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
					.title-row {
						width: 100%;
					}
					.title-col {
						width: 100%;
					}
					.component {
						overflow: hidden;
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
					.highlight {
						cursor: pointer;
						text-decoration: none;
						color: rgb(16, 16, 16);
						background-image: linear-gradient(120deg, rgb(46, 199, 192) 0%, rgb(26, 134, 228) 100%);
						background-repeat: no-repeat;
						font-weight: bold;
						background-size: 100% 0.2em;
						background-position: 0px 100%;
						transition: background-size 0.25s ease-in 0s;
					}
					.highlight:hover {
						background-size: 100% 88%;
						color: white;
					}
					.sub {
						color: #000;
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
					.sub2 {
						color: #000;
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
						font-weight: 300;
						text-align: center;
						font-size: 16px;
					}
					.survey-button {
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
						text-align: center;
					}
					.arrow-down {
						color: #000;
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
						animation: anim 0.35s ease-in alternate infinite;

						@keyframes anim {
							0% {
								transform: translateY(0);
							}
							100% {
								transform: translateY(10px);
							}
						}
					}
				`}
			</style>
		</div>
	);
}
