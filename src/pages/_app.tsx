import React, {useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Templates/Partials/SEO'
import withReduxSaga from 'next-redux-saga'
import {CookiesProvider} from "react-cookie";


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
        <CookiesProvider>
            <Seo/>
            <span style={!isLoading ? inVisibleStyle : visibleStyle}>
                <Component {...pageProps} />
            </span>
        </CookiesProvider>
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

