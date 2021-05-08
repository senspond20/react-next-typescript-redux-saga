import React, { ReactNode} from "react";
import theme from "@components/Layouts/Theme";
import {ThemeProvider} from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@stores/reducers";
import {Theme} from "@stores/actions/actionTypes";
// import {lightTheme} from "@components/Layouts/Theme/lightTheme";
// import {darkTheme} from "@components/Layouts/Theme/darkTheme";
import {common, lightTheme, darkTheme} from "@components/Layouts/Theme";

type Props = {
    children?: ReactNode
    title?: string
};
const Layout =({ children} : Props)=>{
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.theme)
    const theme = (state.mode === Theme.light) ? lightTheme : darkTheme;
    // console.log((theme.theme.colors._blue))

    return (

        <ThemeProvider theme={theme}>
            {/*공통 디자인 */}
            <ThemeProvider theme={common}>
                <h1>레이아웃 적용됬니?</h1>
                {children}
            </ThemeProvider>
        </ThemeProvider>
    )
}
export default Layout;