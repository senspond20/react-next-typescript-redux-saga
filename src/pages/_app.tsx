import React, {useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Templates/Partials/SEO'
import withReduxSaga from 'next-redux-saga'
import {CookiesProvider} from "react-cookie";

// @ts-ignore
function SafeHydrate({ children }) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}
function WrappedApp ({Component, pageProps } : AppProps) : JSX.Element{

    const [isLoading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true);
    })
    const visibleStyle = {
        display: '',
        transition: 'display 3s',
    };
    const inVisibleStyle = {
        display: 'none',
        transition: 'display 3s',
    };
    return (
        <SafeHydrate>
            <CookiesProvider>
                <span style={!isLoading ? inVisibleStyle : visibleStyle}>
                <Component {...pageProps} />
            </span>
            </CookiesProvider>
        </SafeHydrate>

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

