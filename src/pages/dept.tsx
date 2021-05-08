import React, {useState} from 'react';
import Button from "@components/Button";
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme} from "@components/Layouts/Theme/lightTheme"; // 환경별 테마 정보 가져오기
import {darkTheme} from "@components/Layouts/Theme/darkTheme";

function App() {
    const [themeMode, setThemeMode] = useState('light'); // 테마 모드 세팅
    const theme = themeMode === 'light' ? lightTheme : darkTheme; // 테마 환경에 맞는 테마 컬러 가져오기.

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트

    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Button  title={themeMode ==='light'? '일반모드로 테마 변경하기' : '다크모드로 테마 변경하기' }
                         click={toggleTheme}/>
            </Main>
        </ThemeProvider>
    );
}

export default App;

const Main = styled.div`
    width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.bgColor};
`;
