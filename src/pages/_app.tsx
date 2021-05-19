import React from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Templates/Partials/SEO'
import withReduxSaga from 'next-redux-saga'


function WrappedApp ({
     Component,
     pageProps
} : AppProps) : JSX.Element{
    return (
        <>
            <Seo/>
            <Component {...pageProps} />
        </>
    )
}
WrappedApp.getInitialProps = async (context: { Component: any; ctx: any; }) =>{
    const { Component, ctx } = context;
    const { store, isServer } = ctx; //

    console.log((store))
    console.log(isServer)
    const pageProps = (await Component.getInitialProps?.(ctx)) || {};

    return {pageProps}
}

//export default wrapper.withRedux(WrappedApp);

 export default wrapper.withRedux(withReduxSaga(WrappedApp));

