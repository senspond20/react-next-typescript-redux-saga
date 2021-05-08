import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Seo'
import {ThemeProvider} from "styled-components";
import Layout from "@components/Layouts";
import theme from "@components/Layouts/Theme";

// @ts-ignore
const WrappedApp: FC<AppProps> = ({Component,pageProps}) => (
    // <Provider store={store}> 
    // <ThemeProvider theme={theme}>
        <Layout>
        {/*    <Seo/>*/}
            <Component {...pageProps} />
        </Layout>
    // {/* // </Provider> */}
    //  </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);