import React from "react";
import Document, { NextScript, Main, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyle from "../assets/GlobalStyles";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
	// static getInitialProps({ renderPage }) {
	// 	const sheet = new ServerStyleSheet();
	// 	// Retrieve styles from components in the page
	// 	const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
	// 	// Extract the styles as <style> tags. Output the styles in the <Head>
	// 	const styleTags = sheet.getStyleElement();
	// 	return { ...page, styleTags };
	// }
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
					<link rel="manifest" href="/public/manifest.json" />
					<link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
					/>
					<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
					<link rel="shortcut icon" href="/public/favicon.ico" />
					<link rel="stylesheet" type="text/css" href="/asset/custom" />
					{this.props.styleTags}
					<GlobalStyle />
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
