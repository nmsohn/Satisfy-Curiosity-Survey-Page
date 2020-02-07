import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Feature2 extends Component {
	render() {
		const title = "Feature2";
		const content = "feature2 description";
		return (
			<Section className="section-feature">
				<Headline heading={title} description={content} />
			</Section>
		);
	}
}
