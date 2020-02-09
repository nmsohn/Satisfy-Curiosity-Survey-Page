import App from "next/app";
import Head from 'next/head';
import React from "react";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme";
import GlobalStyle from "./assets/GlobalStyles";
import { ParallaxProvider } from "react-scroll-parallax";

moment.locale("en");

export default class RootApp extends App {
	static async getInitialProps({ Component, ctx }) {
		if (typeof window !== "undefined") {
			window.onload = () => {
			  document.getElementById("flashStyle").remove();
			};
		  }
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<ThemeProvider theme={theme}>
					<>
						<GlobalStyle />
						<ParallaxProvider>
							<Component {...pageProps} {...this.state} />
						</ParallaxProvider>
					</>
				</ThemeProvider>
			</>
		);
	}
}