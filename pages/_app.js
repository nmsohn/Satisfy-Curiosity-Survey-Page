import App, { Container } from "next/app";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";
import Helmet from "react-helmet";
import moment from "moment";
import styled from "styled-components";
import { Layout } from "antd";
const { Footer } = Layout;
import { ThemeProvider, createGlobal } from "styled-components";

moment.locale("en");

Router.events.on("routeChangeStart", url => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class RootApp extends App {
	render() {
		const { Component, ...other } = this.props;
		return (
			<Container>
				<Helmet title="LAH" />
				//TODO: theme 작성하기
				<ThemeProvider theme={theme}>
					<Layout {...other} {...this.state}>
						<Component {...other} {...this.state} />
					</Layout>
				</ThemeProvider>
			</Container>
		);
	}
}
