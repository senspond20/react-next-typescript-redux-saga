import React from 'react';
import {Hero,Header,Footer,SEO} from "@components/Templates/Partials";
import dynamic from "next/dynamic";
const GoToTop = dynamic(() => import('components/Atom/Utils/GoToTop'), {ssr: false})
import ThemeLayout from "@components/Templates/Layouts/ThemeLayout";
import styled from "styled-components";

type Props ={
    title? : string
    children? : React.ReactNode
}

const Content = styled.main`
  min-height: 980px;
`;

const MainTemplate = ({title, children} : Props) =>{
    return(
        <div>
        <ThemeLayout>
            <SEO title={title}/>
            <Hero/>
            <Header/>
            <section>
                <Content>
                    {children}
                </Content>
            </section>
            <Footer/>
            <GoToTop/>
        </ThemeLayout>
        </div>

    )
}

export default MainTemplate;