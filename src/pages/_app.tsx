import { AppProps } from 'next/app'
// import '@public/css/globals.css'
// import {ThemeType,darkTheme, lightTheme} from '../styles/Theme';
// import useThemeSwitcher from 'styles/Theme/UseThemeSwiter';
import React from 'react';
// import { ThemeProvider } from 'styled-components';
// import Global from 'styles/Global';

function App({ Component, pageProps }: AppProps) {
  console.log(process.env.NODE_ENV)
  console.log(process.env.REACT_APP_SERVICE_VERSION)


  return (
    // <ThemeProvider theme={theme}>
      // {/* <Global /> */}
      <Component {...pageProps} />
    // </ThemeProvider>)
    )
}

export default App