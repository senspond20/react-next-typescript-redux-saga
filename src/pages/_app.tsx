import React from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Seo'
import Layout from "@components/Layouts";
import withReduxSaga from 'next-redux-saga'
import {Provider} from "react-redux";

// let restore;
function WrappedApp ({
     Component,
     pageProps
} : AppProps) : JSX.Element{
    return (
        // <Provider store={restore}>
            // <Layout>
               // {/*<Seo/>*/}
                <Component {...pageProps} />
            // </Layout>
        // </Provider>
    )
}
WrappedApp.getInitialProps = async (context: { Component: any; ctx: any; }) =>{
    const { Component, ctx } = context;
    const { store, isServer } = ctx; //
    // restore = store;
    console.log((store))
    console.log(isServer)
    const pageProps = (await Component.getInitialProps?.(ctx)) || {};

    return {pageProps}
}

//export default wrapper.withRedux(WrappedApp);
 export default wrapper.withRedux(withReduxSaga(WrappedApp));


// withReduxSaga
//https://github.com/bmealhouse/next-redux-saga