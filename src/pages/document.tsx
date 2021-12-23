import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
                    />
                    <link rel='preconnect' href='https://fonts.gstatic.com' />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700&display=swap'
                        rel='stylesheet'
                    />
                    <title>Hacker News stories</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
