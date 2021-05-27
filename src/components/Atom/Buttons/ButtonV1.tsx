import React from "react";
import styled from "styled-components";

interface Props extends React.ComponentPropsWithoutRef<"button">{
    children : React.ReactNode,
}

export default function ButtonV1(prop : Props){
    const {children, ...rest} = prop;
    return(
        <CustomButton {...rest}>{children}</CustomButton>
    )
}

const CustomButton = styled.button`
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: ${prop => prop.theme.green};
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
    :hover, button:active, button:focus {
    background: ${prop => prop.theme.greenActive};
  }
`;