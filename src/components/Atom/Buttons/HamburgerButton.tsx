import React from "react"
import { useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    input[id="hamberger-menu"] {
        display: none;
    }
    input[id="hamberger-menu"] + label {
        position: relative;
        display: block;
        width: 40px;
        height: 30px;
        cursor: pointer;
    }
    input[id="hamberger-menu"] + label span {
        position: absolute;
        display: block;
        width: 100%;
        height: 5px;
        border-radius: 30px;
        background: #000;
        transition: 0.3s;
    }
    input[id="hamberger-menu"] + label span:nth-child(1) {
        top: 0;
    }
    input[id="hamberger-menu"] + label span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
    }
    input[id="hamberger-menu"] + label span:nth-child(3) {
        bottom: 0;
    }
    /* 클릭 시 */
    input[id="hamberger-menu"]:checked + label span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }
    input[id="hamberger-menu"]:checked + label span:nth-child(2) {
        opacity: 0;
    }
    input[id="hamberger-menu"]:checked + label span:nth-child(3) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
    }
`

export default function HamburgerButton(){
    const onCilckHandler = () =>{
  
    }

    return (
        <Wrapper onClick={onCilckHandler}>
            <input type="checkbox" id="hamberger-menu" />
            <label htmlFor="hamberger-menu">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </Wrapper>
    )
}