import React from "react";
import styled from "styled-components";

interface Props  extends React.ComponentPropsWithoutRef<"label">{}

export default function LabelV1(prop : Props) : JSX.Element{
    const {...rest} = prop;
    return(
        <Label className={'label-v1'} {...rest}/>
    )
}

const Label = styled.label`
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
`