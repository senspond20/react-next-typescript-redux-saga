import React from "react"
import { useRef } from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    input.hamburger-chk { display: none;  }
    input.hamburger-chk + label { position: relative; display: block;
        width: 25px;  height: 25px; cursor: pointer;
    }
    input.hamburger-chk + label span {
        position: absolute;  display: block;
        width: 100%;  height: 5px;  border-radius: 30px;
        background: #333;
        //background: #ededed;
        transition: 0.3s;
    }
    input.hamburger-chk + label span:nth-child(1) {  top: 0;  }
    input.hamburger-chk + label span:nth-child(2) {  top: 50%;  transform: translateY(-50%);    }
    input.hamburger-chk + label span:nth-child(3) {  bottom: 0;  }
    input.hamburger-chk:checked + label span:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
    input.hamburger-chk:checked + label span:nth-child(2) { opacity: 0; }
    input.hamburger-chk:checked + label span:nth-child(3) { bottom: 50%; transform: translateY(50%) rotate(-45deg); }
`
type Props = {
    isChecked : boolean;
}
export default function HamburgerButton({isChecked} : Props){
    return (
        <Wrapper>
            <input type="checkbox" className="hamburger-chk" checked={isChecked || false}/>
            <label>
                <span></span>
                <span></span>
                <span></span>
            </label>
        </Wrapper>
    )
}