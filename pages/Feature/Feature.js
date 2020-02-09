import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";
import styled from "styled-components";

export default class Feature extends Component {
	render() {
		const title = "Make your day meaningful";
		const content = "We are aiming to building a community-driven open marketplace where people with talent meet people with curiosity. We encourage any local talents to share their professions, experience or even hobbies. ";
		const content2 = "Skills can be anything from languages to instruments, cooking to brewing, website design to dancing and more!. Fill your time by making contributions to the community.";

		return (
			<Section className="section-feature component second-component">
				<Headline heading={title} description={content} description2={content2} />
			</Section>
		);
	}
}
