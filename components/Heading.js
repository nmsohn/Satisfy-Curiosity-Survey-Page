import React, { Component } from 'react';
import _JSXStyle from 'styled-jsx/style';

export default class Heading extends Component {
	render() {
		const title = this.props.title;

		return (
			<div className="headline">
				<h2
					className="heading"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="false"
				>
					{title}
				</h2>
				<style jsx>
					{`
						.headline {
							margin-bottom: 20px;
						}
						h2 {
							position: static;
							left: 0%;
							right: 0%;
							bottom: auto;
							display: inline-block;
							height: auto;
							margin-top: 0px;
							margin-right: 10px;
							margin-bottom: 0px;
							font-family: Anton;
							color: #000;
							font-size: 96px;
							line-height: 86px;
							font-weight: 300;
							text-align: left;
							text-decoration: none;
						}
						@media (max-width: 480px) {
							.headline {
								margin-top: 50px;
							}
							h2 {
								font-size: 50px;
								line-height: 50px;
							}
						}
					`}
				</style>
			</div>
		);
	}
}
