import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from '@stores/index';
import Seo from '@components/Seo'

const WrappedApp: FC<AppProps> = ({Component,pageProps}) => (
    // <Provider store={store}> 
    <>
        <Seo/>
        <Component {...pageProps} />
    {/* // </Provider> */}
    </>
);

export default wrapper.withRedux(WrappedApp);