import React from "react";
import styled from "styled-components";
import Common from "styles/Common";

const Component = styled.div`
  ${Common.nonSelect};
  position: fixed; bottom: 20px; 
  right: 20px; width: 50px; height: 50px; 
  background-color: ${Common.palette.BLUE[8]}; 
  color: white; 
  ${Common.flex.flexCenter}
  cursor: pointer;
`;
type Props = {
    children? : React.ReactNode
    rest? : any
}
export default function SquareButton(props : Props){
    return <Component {...props.rest}>{props.children}</Component>
}
