import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Feature extends Component {
	render() {
		const title = "Feature";
		const description = "feature description";
		return (
			<Section className="section-feature">
				<Headline heading={title} paragraph={description}></Headline>
			</Section>
		);
	}
}
