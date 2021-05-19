import React from 'react';
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
  background-color: #f3f3f8;
  border-bottom: 1px solid #eee;
  ${common.flex.flexCenter};
`;
const ToggleSideBar = ()=>{
    document.querySelector('blog-sidebar')?.classList.add('');
}
const ToggleBtn = styled.div`
  float: right;
  cursor: pointer;
`;
function Header(){
    return(
        <HeaderWrapper>
            <div>
                <ToggleBtn onClick={ToggleSideBar}>Toggle</ToggleBtn>
            </div>
        </HeaderWrapper>
    )
}
export default Header;