import React, { useState } from 'react';
import styled from "styled-components";
import common from "@components/Templates/styles/Common";

const HeaderWrapper = styled.header`
  content: '';
  clear: both;
  padding: 1em;
  grid-column: 1 / 4;
  z-index: 1000;
  width: auto;
  height: 50px;
  /* background-color:background: rgb(2,0,36); */
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
/* background : ${({theme}) => theme.body.fgColor}; */
  /* background-color: ${common.palette.BLUE[9]}; */
  border-bottom: 1px solid #eee;
  /* ${common.flex.flexCenter}; */
`;

const ToggleBtn = styled.div`
  /* float: right; */
  position: fixed; top: 20px; right: 20px; width: 50px; height: 50px; 
  cursor: pointer;
  z-index: 9999;
`;

const HamburgerWrapper = styled.div`
    background: #cccccc;
    /* color : white; */
    position: fixed;
    width: 400px;
    height: 1600px;
    top:-70px;
    
    right: 0;
    bottom: 0;
    /* display: none; */
    opacity: 1;
    z-index: 1800;
`;

function Hamburger(){

}
// http://blog.302chanwoo.com/2016/08/react-redux-resize/ 
// 이거 해보자
function Header(){
    const [isShowSideBar, setShowSideBar] = useState(false);
    const [isShowHamburger, setIsShowHamburger] = useState(false);

    const ToggleHamburger = ()=>{
        //  alert('gg')
        // document.querySelector('blog-sidebar')?.classList.add('visible-opacity');
        setIsShowHamburger(!isShowHamburger);

    }

    return(
        <div>
        <HeaderWrapper className={'header-wrap'}>
            <div>

            </div>

  
        </HeaderWrapper>
        {
                 !isShowSideBar
                 ?<ToggleBtn onClick={ToggleHamburger}>Toggle</ToggleBtn>
                 : null
                }
        {isShowHamburger 
            ? <HamburgerWrapper>
                    dfdfdfd
            </HamburgerWrapper>
            : null}
        </div>


    )
}
export default Header;