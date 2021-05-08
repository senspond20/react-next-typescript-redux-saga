import React, {ReactNode, useCallback} from "react";

import {ThemeProvider} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@stores/reducers";
import {Theme} from "@stores/actions/actionTypes";
import {common, lightTheme, darkTheme} from "@components/Layouts/Theme";
import GlobalStyles from "@components/Layouts/globalStyle";
import Head from "next/head";
import {dark, light} from "@stores/actions/theme";

type Props = {
    children?: ReactNode
    title?: string
};
const Layout =({title, children} : Props)=>{
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.theme)
    let isLight = state.mode === Theme.light;
    const theme = (isLight) ? lightTheme : darkTheme;
    // console.log((theme.theme.colors._blue))
    const toggleTheme = () =>{ (isLight) ? onDark() : onLight() }
    const onDark = useCallback(() => { dispatch(dark())}, [])
    const onLight = useCallback(() =>{ dispatch(light())}, [])

    return (
    <>
        <Head>
            <title>Senshig | {title}</title>
            <meta name="description" content="senshig website" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
       <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <header>
                <p>현재 모드 : {state.mode}</p>
                <button onClick={toggleTheme}>테마스위치</button>
            </header>
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