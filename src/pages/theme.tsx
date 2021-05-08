import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { dark, light } from '@stores/actions/theme';
import Button from "@components/Button";
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from "@components/Layouts/Theme/lightTheme"; // 환경별 테마 정보 가져오기
import {darkTheme} from "@components/Layouts/Theme/darkTheme";
import {RootState} from "@stores/reducers";
import {Theme} from "@stores/actions/actionTypes";

function App() {
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme)
    const prop = (theme.mode === Theme.light) ? lightTheme : darkTheme;
    console.log((theme.mode))

    const toggleTheme = () =>{
        {
            (theme.mode === Theme.light)
            ? onDark()
            : onLight()
        }
    }

    const onDark = useCallback(() =>{
          dispatch(dark())
    }, [])

    const onLight = useCallback(() =>{
        dispatch(light())
    }, [])

    return (
        // <ThemeProvider theme={prop}>
            <Main>
                <h2>테마 모드 {theme.mode}</h2>
                <Button  title={(theme.mode === Theme.light) ? '다크 모드로 변경하기' : '화이트 모드로 변경하기' }
                         click={toggleTheme}/>
            </Main>
        // </ThemeProvider>
    );
}

export default App;
//

const Main = styled.div`
    width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.mode.bgColor};
  `;