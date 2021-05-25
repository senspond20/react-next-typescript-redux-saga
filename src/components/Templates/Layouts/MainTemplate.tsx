import React from 'react';
import {Hero,Header,Footer,SEO} from "@components/Organisms/Partials";
import dynamic from "next/dynamic";
const GoToTop = dynamic(() => import('@components/Atom/Buttons/GoToTop'), {ssr: false})
import ThemeLayout from "@components/Templates/Layouts/ThemeLayout";
import styled from "styled-components";

type Props ={
    title? : string
    children? : React.ReactNode,
    useHero? : boolean
    useHeader? : boolean,
}

const Content = styled.main`
  min-height: 980px;
`;

const MainTemplate = (props : Props) =>{
    return(
        <ThemeLayout>
            <SEO title={props.title}/>
            {props.useHero || true ? <Hero/> : null}
            {props.useHeader || true? <Header/> : null}
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