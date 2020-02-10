import React, { Component } from 'react';
import { Row } from 'antd';
import Heading from './Heading';
import Paragraph from './Paragraph';
import _JSXStyle from 'styled-jsx/style';

export default class Headline extends Component {
	render() {
		const heading = this.props.heading;
		const description = this.props.description;
		const description2 = this.props.description2;

		return (
			<div className="headline">
				<Heading title={heading} />
				<div className="paragraph-container">
					<Row>
						<Paragraph paragraph={description} />
						<Paragraph paragraph={description2} />
					</Row>
				</div>
				<style jsx>
					{`
						.headline {
							margin-left: auto;
							margin-right: auto;
							max-width: 940px;
							position: static;
							display: block;
						}
						.paragraph-container {
							font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
								Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
							line-height: 26px;
							font-weight: 300;
							margin-top: 10px;
						}
					`}
				</style>
			</div>
		);
	}
}
