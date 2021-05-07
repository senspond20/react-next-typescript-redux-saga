import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '../src/stores';
import NextSeo from '@components/Seo';

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <>
        <NextSeo/>
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(WrappedApp);