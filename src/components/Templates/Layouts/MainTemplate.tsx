import React from 'react';
import {Hero,Header,Footer,SEO} from "@components/Templates/Partials";
import GoToTop from 'components/Atom/Utils/GoToTop';
import ThemeLayout from "@components/Templates/Layouts/ThemeLayout";
import styled from "styled-components";

type Props ={
    title? : string
    children? : React.ReactNode
}

const Content = styled.main`
  min-height: 980px;
`;

const MainTemplate = (props : Props) =>{
    return(
        <ThemeLayout>
            <SEO title={props.title}/>
            <Hero/>
            <Header/>
            <section>
                <Content>
                    {props.children}
                </Content>
            </section>
            <Footer/>
            <GoToTop/>
        </ThemeLayout>
    )
}

export default MainTemplate;