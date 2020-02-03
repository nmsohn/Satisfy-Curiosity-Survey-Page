import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        // const {html, head} = renderPage();
        // const styles = flush();

        // return {html, head, styles};
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
        ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            styles: (
            <>
                {initialProps.styles}
                {sheet.getStyleElement()}
            </>
            ),
        }
        } finally {
            sheet.seal()
        }
    }

    render () {
        return(
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
                    <meta name="description" content="LAH"/>
                    <meta name="keywords" content="jobs,nz,odd jobs,errands,temp jobs, one off jobs" />
                    <link rel="manifest" href="public/static/manifest.json" />
                    <link
                        href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css"
                        rel="stylesheet"
                    />
                    {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
                    <style>
                    {`body { margin: 0 } /* custom! */`}
                    </style>
                    {/* <title>LAH - Help your neighbours</title> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}