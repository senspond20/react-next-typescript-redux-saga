import GoToTop from 'components/Atom/Utils/GoToTop';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@stores/reducers";
import {ThemeType} from '../styles/Theme'
import {darkTheme, lightTheme} from "@components/Templates/styles/Theme";
import {ThemeProvider} from "styled-components";
import ThemeChanger from "@components/Templates/Partials/ThemeChanger";
import GlobalStyle from "@components/Templates/styles/Global";
type Props ={
    title? : string
    children? : React.ReactNode
}

const MainTemplate = (props : Props) =>{

    const state = useSelector((state: RootState) => state.theme)
    const isLight = (state.mode === ThemeType.light);
    const theme = (isLight) ? lightTheme : darkTheme;
    console.log(theme)
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            {props.children}
            <ThemeChanger mode = {isLight}/>
            <GoToTop/>
        </ThemeProvider>
    )
}

export default MainTemplate;