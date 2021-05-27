import React from "react";
import styled from "styled-components";

interface Props  extends React.ComponentPropsWithoutRef<"input">{}

export default function InputV1(prop : Props) : JSX.Element{
    const {...rest} = prop;
    return(
        <Input className={'input-v1'} {...rest}/>
    )
}

const Input = styled.input`
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;
    :focus { outline:none; }
`