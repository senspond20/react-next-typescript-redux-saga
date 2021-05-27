import React from "react";
import styled from "styled-components";

interface Props {
    className? : string,
}
export default function BarV1(prop : Props){
    return(
        <Bar className={prop.className}/>
    )
}

const Bar = styled.span`
   position: relative;
   display: block;
   width: 300px;
  :before,:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${(props => props.theme.green)};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  :before { left: 50%; }
  :after { right: 50%; }
`;
