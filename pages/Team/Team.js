import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Team extends Component {
	render() {
		const title = "Team";
		const description = "team description";

		return (
			<Section className="section-team component third-component">
				<Headline heading={title} paragraph={description}></Headline>
			</Section>
		);
	}
}
