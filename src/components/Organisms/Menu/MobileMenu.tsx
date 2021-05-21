import HamburgerButton from "@components/Atom/Buttons/HamburgerButton"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
    .hamburger-wrap{
        position: fixed;
        top : 15px;
        right: 15px;
        z-index: 9999;
    }
    .mobile-wrap{
        width: 457px;
        height: 100vh;
        background-color: #eee;
        position: absolute;
        top:0;
        right: 0;
    }
`;

export default function MobileMenu(){
    return (
        <Container>
            <div className ='hamburger-wrap'>
                <HamburgerButton/>
            </div>
            <div className='mobile-wrap'>
                
            </div>
        </Container>
    )
}