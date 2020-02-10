import React, { Component } from "react";
import Headline from "../../components/Headline";
import _JSXStyle from "styled-jsx/style";
// import { Section } from "../../components/StyledComponents";
import Wave from 'react-wavify';

export default class Team extends Component {
	render() {
		const title = "Our Team";
		const content =
			"We started our journey from a small idea. 'What if we build a platform for people who are failing to see the value that their skills might have to someone who wants to learn something?' Now we are starting our MVPs by hearing more from the community.";
		const content2 =
			<p>Our team is working towards building an end-to-end platform where talents meet curiosity by connecting people. Meanwhile, we are organising a <a href="https://tinyurl.com/wellingtonskillshare">Facebook group</a> to share our ideas and hear from people who would like to join our service in future!</p>;
		
		const WaveBackground = () => (
			<Wave fill='url(#gradient2)'
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
					<linearGradient id="gradient2" gradientTransform="rotate(120)">
						<stop offset="10%" stopColor="#F7971E" />
						<stop offset="90%" stopColor="#FFD200" />
					</linearGradient>
				</defs>
			</Wave>
			);
		return (
			<div>
				<div className="section-team component third-component">
					<Headline heading={title} description={content} description2={content2}></Headline>
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
				<WaveBackground />
			</div>
		);
	}
}
