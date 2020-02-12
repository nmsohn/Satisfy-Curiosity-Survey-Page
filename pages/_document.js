import React from 'react';
import Document, { NextScript, Main, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../assets/GlobalStyles';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"
					/>
					<meta name="description" content="NZSkillShare" />
					<meta name="keywords" content="jobs, nz, private lessons, hobbies, gig economy, classes" />
					<link rel="manifest" href="/manifest.json" />
					<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
					/>
					<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
					<link rel="shortcut icon" href="../public/favicon.ico" />
					{this.props.styleTags}
					<GlobalStyle />
					<style>
						{`
						html {
							scrollbar-color: #495460 rgba(255, 255, 255, 0);
							scrollbar-width: thin;
						}`}
					</style>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
					<script> AOS.init();</script>
				</body>
			</html>
		);
	}
}
