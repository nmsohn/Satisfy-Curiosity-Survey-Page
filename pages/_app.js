import App, { Container } from 'next/app';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import Helmet from 'react-helmet';
import moment from 'moment';
import styled from 'styled-components';
import { Layout } from "antd";
const { Footer } = Layout;
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        primary_blue: '#0070f3',
        primary_white: '#F0F2F5'
      },
}

moment.locale('en');

Router.events.on('routeChangeStart', (url) => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Helmet title="LAH" />
                <Layout {...other} {...this.state}>
                    <ThemeProvider theme={theme}>
                        <Component {...other} {...this.state} />
                    </ThemeProvider>
                </Layout>
            </Container>
        );
    }
}