import React, { Component } from "react";
import Headline from "../../components/Headline";
import styled from "styled-components";
// import { Section } from "../../components/StyledComponents";
import _JSXStyle from "styled-jsx/style";
import Wave from 'react-wavify';

export default class Feature extends Component {
	render() {
		const title = "Make your day meaningful";
		const content =
			<p>We are aiming to building a community-driven open marketplace where people with <a className="highlight" style={{cursor: "text"}}>talent</a> meet people with <a className="highlight" style={{cursor: "text"}}>curiosity</a>. We encourage any local talents to share their professions, experience or even their hobbies 😎</p>;
		const content2 =
			"Skills can be anything from languages to instruments, cooking to brewing, website design to dancing and many more! Fill your time by making contributions to the community.";
		
		const WaveBackground3 = () => (
			<Wave fill='url(#gradient)'
					paused={false}
					opacity={0.4}
					options={{
					height: 1,
					amplitude: 40,
					speed: 0.15,
					points: 3
					}}
			>
				<defs>
					<linearGradient id="gradient" gradientTransform="rotate(120)">
						<stop offset="10%" stopColor="#FC5C7D" />
						<stop offset="90%" stopColor="#6A82FB" />
					</linearGradient>
				</defs>
			</Wave>
			);

		return (
			<div>
				<div className="section-feature component second-component">
					<Headline heading={title} description={content} description2={content2} />
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
						`}
					</style>
				</div>
				<WaveBackground3/>
			</div>
		);
	}
}
