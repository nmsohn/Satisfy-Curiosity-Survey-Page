import React, { Component } from "react";
import Headline from "../../components/Headline";
import styled from "styled-components";
// import { Section } from "../../components/StyledComponents";
import _JSXStyle from "styled-jsx/style";

export default class Feature extends Component {
	render() {
		const title = "Make your day meaningful";
		const content =
			"We are aiming to building a community-driven open marketplace where people with talent meet people with curiosity. We encourage any local talents to share their professions, experience or even hobbies. ";
		const content2 =
			"Skills can be anything from languages to instruments, cooking to brewing, website design to dancing and more!. Fill your time by making contributions to the community.";

		return (
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
							min-height: 80vh;
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
		);
	}
}
