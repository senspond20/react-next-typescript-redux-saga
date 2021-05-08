import React, { ReactNode} from "react";
import theme from "@components/Layouts/Theme";
import {ThemeProvider} from "styled-components";

type Props = {
    children?: ReactNode
    title?: string
};
const Layout =({ children} : Props)=>{
    return (
        <>
            <ThemeProvider theme={theme}>
                <h1>레이아웃 적용됬니?</h1>
                {children}
            </ThemeProvider>
        </>
    )
}
export default Layout;