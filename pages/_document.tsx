import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="A Next.js application" />
                <link rel="icon" href="/icon.png" />
        
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
        
                <link rel="stylesheet" href="/styles/global.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
      </Html>
    );
}

export default Document;