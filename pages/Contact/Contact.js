import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Contact extends Component {
	render() {
		const title = "Contact Us";
		const content = "While our team is working on building a platform, join our facebook group or contact us for more about our service!";

		return (
			<Section className="section-contact component last-component">
				<Headline heading={title} description={content}></Headline>
			</Section>
		);
	}
}
