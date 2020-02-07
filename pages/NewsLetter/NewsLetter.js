import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class NewsLetter extends Component {
	render() {
		const title = "NewsLetter";
		const content = "NewsLetter description";
		return (
			<Section className="section-newsletter">
				<Headline heading={title} description={content} />
			</Section>
		);
	}
}
