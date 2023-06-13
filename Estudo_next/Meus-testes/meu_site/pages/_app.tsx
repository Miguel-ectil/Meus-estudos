import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';

import Login from './login'
import Sidebar from '../src/layout/Sidebar'
import { AppThemeProvider} from '../src/contexts'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Sidebar>
        <CssBaseline />
        <Component {...pageProps} />
      </Sidebar>
    </AppThemeProvider>
  )
}
