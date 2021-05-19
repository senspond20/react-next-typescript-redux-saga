import React from 'react';
import styled from "styled-components";
import TextLogo from "@components/Atom/Icon/TextLogo";

const FooterWrapper = styled.footer`
  padding: 1em;
  //width: 1450px;
  //background: #333;
  border-top: 1px solid #eee;
  grid-column: 1 / 4;
  text-align:center;
`;
const FooterHighlight = styled.footer`
  border-bottom: 1px solid #eeeeee;

`
function Footer(){
    return(
        <FooterWrapper>
            <FooterHighlight>
                {/*<div>*/}
                <TextLogo text={'S`ㅂㄺ!'}/>

                {/*<address>dfdfd.com</address>*/}
                {/*</div>*/}
            </FooterHighlight>
            <div>
                <p style={{color:'red'}}>footer</p>
            </div>
        </FooterWrapper>
    )
}
export default Footer;