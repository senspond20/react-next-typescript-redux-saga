import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../src/stores';
import NextSeo from '@components/Seo';

const WrappedApp: FC<AppProps> = (
    {Component,
     pageProps}) => (
    // <Provider store={store}> 
    <>
        <NextSeo/>
        <Component {...pageProps} />
    {/* // </Provider> */}
    </>
);

export default wrapper.withRedux(WrappedApp);