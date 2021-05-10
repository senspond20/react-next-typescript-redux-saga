import React, {ReactNode, useCallback} from "react";
import Link from "next/link";
import {ThemeProvider} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@stores/reducers";
import {Theme} from "@stores/actions/actionTypes";
import {common, lightTheme, darkTheme} from "@components/Layouts/Theme";
import GlobalStyles from "@components/Layouts/globalStyle";
import Head from "next/head";
import {dark, light} from "@stores/actions/theme";
import {Header} from "@components/Layouts/Partials"
type Props = {
    children?: ReactNode
    title?: string
};

const Layout =({title, children} : Props)=>{

    const state = useSelector((state: RootState) => state.theme)
    let isLight = state.mode === Theme.light;
    const theme = (isLight) ? lightTheme : darkTheme;

    // @ts-ignore
    return (
    <>
        <Head>
            <title>Senshig | {title}</title>
            <meta name="description" content="senshig website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header isLight ={isLight} mode ={state.mode}/>
            <main>
               {children}
            </main>
            <footer>

            </footer>
        </ThemeProvider>
    </>

    )
}
export default Layout;