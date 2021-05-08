import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "@components/Layouts/Theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${({ theme }) => theme.flex.flexCenterColumn};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.green_1};
`;

const Subtitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes._subtitle};
  color: ${({ theme }) => theme.colors.green};
`;

const Paragraph = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.Paragraph};
  color: ${({ theme }) => theme.colors._blue};
`;

const App = () => {
    return (
        <div>
            {/*<ThemeProvider theme={theme}>*/}
                <Container>
                    <Title>Hello</Title>
                    <Subtitle>Welcome to styled-component's world</Subtitle>
                    <Paragraph>ThemeProvider에 대해서 배워볼까요?</Paragraph>
                </Container>
            {/*</ThemeProvider>*/}
        </div>
    );
};

export default App;