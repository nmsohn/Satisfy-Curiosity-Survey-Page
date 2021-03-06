import App from 'next/app';
import React from 'react';
import moment from 'moment';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import theme from '../assets/theme';
import GlobalStyle from '../assets/GlobalStyles';

moment.locale('en');

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
			<>
				<ThemeProvider theme={theme}>
					<ParallaxProvider>
						<GlobalStyle />
						<Component {...pageProps} {...this.state} />
					</ParallaxProvider>
				</ThemeProvider>
			</>
		);
	}
}
