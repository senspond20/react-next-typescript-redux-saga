import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Seo'
import {ThemeProvider} from "styled-components";
import Layout from "@components/Layouts";
import theme from "@components/Layouts/Theme";
import { Provider } from 'react-redux';
// import withReduxSaga from 'next-redux-saga'
function WrappedApp ({
     Component,
     pageProps,
     store
}: AppProps & any) : JSX.Element{
    return (
    <Provider store={store}>
        <Layout>
            {/*<Seo/>*/}
            <Component {...pageProps} />
        </Layout>
    </Provider>
    )
};
WrappedApp.getInitialProps = async ({Component, ctx} : AppProps & any) =>{
    let pageProps = {}
    // SSR 때 data population 하면
    if (Component.getInitialProps) {
        // ctx (store 가 들어있음) 를 주입
        pageProps = await Component.getInitialProps(ctx)
    }
    return {pageProps}
}
// export default wrapper.withRedux(withReduxSaga(WrappedApp));
export default wrapper.withRedux(WrappedApp);
// withReduxSaga
//https://github.com/bmealhouse/next-redux-saga