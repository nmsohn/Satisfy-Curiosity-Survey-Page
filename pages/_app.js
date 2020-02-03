import App, { Container } from "next/app";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import moment from "moment";
import { Layout } from "antd";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../assets/theme';
import Container from '../components/Container'

moment.locale("en");

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class RootApp extends App {
	static async getInitialProps ({ Component, ctx }) {
		let pageProps = {}
	
		if (Component.getInitialProps) {
		  pageProps = await Component.getInitialProps(ctx)
		}
	
		return { pageProps }
	  }
	
	render() {
		const { Component, pageProps } = this.props;
		return (
			<Layout>
				<ThemeProvider theme={theme}>
					<Container>
						<Component {...pageProps} {...this.state}/>
					</Container>
				</ThemeProvider>
			</Layout>
		);
	}
}
