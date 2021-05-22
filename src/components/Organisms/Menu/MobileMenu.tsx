import HamburgerButton from "@components/Atom/Buttons/HamburgerButton"
import React from "react"
import styled from "styled-components"
import CategoryList from "@components/Molecules/List/CategoryList";

const Container = styled.div`
    .background-wrap{
      width: 100vw;
      height: 100vh;
      background: rgba(0,0,0,0.45);
      position: fixed;
      left: 0; top:0; bottom: 0; right: 0;
    }
    .mobile-wrap{
        width: 457px;
        height: 100vh;
        background-color: #eee;
 
        position: fixed;
        top:0;
        right: 0;
    }
`;

export default function MobileMenu(){
    return (
        <Container>
            <div className={'background-wrap'}></div>
            <div className='mobile-wrap'>
                <CategoryList/>
            </div>
        </Container>
    )
}