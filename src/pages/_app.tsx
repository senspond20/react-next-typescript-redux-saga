import React, {useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import {CookiesProvider} from "react-cookie";
import '../components/Organisms/Partials/hero.scss'
import 'components/Organisms/Editor/style.css'

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

export default WrappedApp;


