import React from "react";
import Layout from "@components/Templates/Layouts/MainTemplate"
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //flex-wrap: wrap;
  //max-width: 960px;
  //margin-top: 3rem;
`
const handle = () =>{
    return(
        <Layout>
            <Wrapper>
                <Main>
                    <h1>Site</h1>
                    <article>
                        <h3>About</h3>
                        <div>
                            블로그를 ... 이런 이런 이유로 만들었다.
                        </div>
                    </article>
                    <article>
                        <div>
                            <h3>사용기술</h3>
                            <ul>프론트엔드
                                <li>Http/CSS/TypeScript(Javascript)</li>
                                <li>Next(width . React/Redux/Saga)</li>
                            </ul>
                            <ul>백엔드
                                <li>Http/CSS/TypeScript(Javascript)</li>
                                <li>Next(width . React/Redux/Saga)</li>
                            </ul>
                            <ul>
                                서버환경
                                <li>Http/CSS/TypeScript(Javascript)</li>
                                <li>Next(width . React/Redux/Saga)</li>
                            </ul>
                        </div>
                    </article>

                </Main>
            </Wrapper>

        </Layout>

    )
}
export default handle;