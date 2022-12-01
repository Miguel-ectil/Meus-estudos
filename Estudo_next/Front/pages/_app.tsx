import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../src/lib/theme';
import Head from 'next/head';
import CssBaseline  from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material'


 function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
       <Component {...pageProps} />
      </ThemeProvider>
    </> 
  );
}
export default App;
