import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Team extends Component {
	render() {
		const title = "Our Team";
		const content = "We are currently taking part in the Entrepreneurship Bootcamp at Victoria University Wellington. We believe that there are too many people who are failing to see the value that their skills might have to someone who wants to learn something.";
		const content2 = "Our team is working towards building a end-to-end platform where talents meet curiosity by connecting people."

		return (
			<Section className="section-team component third-component">
				<Headline heading={title} description={content} description2={content2}></Headline>
			</Section>
		);
	}
}
