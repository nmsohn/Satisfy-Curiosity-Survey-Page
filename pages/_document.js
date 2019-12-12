import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const {html, head} = renderPage();
        const styles = flush();

        return {html, head, styles};
    }

    render () {
        return(
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="Dev.log"/>
                    <meta name="keywords" content="jobs,nz,odd jobs,errands,temp jobs, one off jobs" />
                    {/* <link rel="manifest" href="/static/manifest.json" /> */}
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <style>
                    {`body { margin: 0 } /* custom! */`}
                    </style>
                    <title>LAH - Help your neighbours</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}