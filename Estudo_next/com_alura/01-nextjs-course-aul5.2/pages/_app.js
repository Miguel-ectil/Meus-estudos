import Head from 'next/head';
import Script from 'next/script';

import GlobalStyle from '../src/theme/GlobalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-2QZDPX3BLK"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());

                            gtag('config', 'G-2QZDPX3BLK');
                        `
                    }}
                />


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Head>
            <Script src="https://polyfill.io/v3/polyfill.min.js" strategy="beforeInteractive" />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
