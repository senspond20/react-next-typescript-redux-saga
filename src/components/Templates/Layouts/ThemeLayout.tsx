import React, {useCallback, useEffect, useState} from 'react';
import {darkTheme, lightTheme,ThemeType} from "@components/Templates/styles/Theme";
import {ThemeProvider} from "styled-components";
import GlobalStyle from "@components/Templates/styles/Global";
import {useCookies} from "react-cookie";

type Props ={
    children? : React.ReactNode
}

/**
 *
 * @param children
 * @constructor
 */
const ThemeLayout = ({children} : Props) =>{
    /**
     * 테마 상태값
     */
    const [cookies,setCookie, removeCookie] = useCookies(['theme']);
    // 초기 테마값은 쿠키에 값이 있는지 체크하고 없으면 디폴트 테마로 (OR연산 단축평가)
    const initTheme = cookies.theme || ThemeType.default
    const [theme, setTheme] = useState(initTheme);

    /**
     * theme 상태가 변경되면 쿠키도 변경
     */
    useEffect(() => {
        console.log(cookies.theme)
        setCookie('theme', theme)
    }, [theme]);

    /**
     * theme 상태를 변경한다.
     */
    const ToggleTheme = useCallback(
        () =>{
            (theme === ThemeType.dark)
                ?    setTheme(ThemeType.light)
                :    setTheme(ThemeType.dark)
        }, [theme] )
    // theme 상태값에 따른 테마 스타일을 get
    const themeStyle = theme === ThemeType.dark ? darkTheme : lightTheme

    return(
        <ThemeProvider theme={themeStyle}>
            <GlobalStyle/>
            <button onClick={ToggleTheme}>테마스위치</button>
            {children}
        </ThemeProvider>
    )
}

export default ThemeLayout;