import React, { Component } from "react";
import Headline from "../../components/Headline";
import { Section } from "../../components/StyledComponents";

export default class Contact extends Component {
	render() {
		const title = "Contact Us";
		const description = "contact description";

		return (
			<Section className="section-contact component last-component">
				<Headline heading={title} paragraph={description}></Headline>
			</Section>
		);
	}
}
