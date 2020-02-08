import App from "next/app";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import moment from "moment";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";
import GlobalStyle from "../assets/GlobalStyles";
import { ParallaxProvider } from "react-scroll-parallax";

moment.locale("en");

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class RootApp extends App {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};
		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}
		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<>
					<GlobalStyle />
					<ParallaxProvider>
						<Component {...pageProps} {...this.state} />
					</ParallaxProvider>
				</>
			</ThemeProvider>
		);
	}
}
