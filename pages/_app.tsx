import React from 'react';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeProvider from '../components/context/Theme.context';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <React.StrictMode>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </React.StrictMode>
  ) 
}

export default MyApp
