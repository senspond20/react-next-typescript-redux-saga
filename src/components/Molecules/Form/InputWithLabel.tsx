import React from "react";
import styled from "styled-components";
import InputV1 from "@components/Atom/Input/InputV1";
import LabelV1 from "@components/Atom/Label/LabelV1";

interface Props  extends React.ComponentPropsWithoutRef<"input">{
    className? : string
    label : string,
};

export default function InputWithLabel(props : Props) : JSX.Element{
    const {className,label, ...rest} = props;
    return (
        <Wrapper className={className}>
            <LabelV1>{label}</LabelV1><InputV1 type={'text'} {...rest}/>
        </Wrapper>
    )
};


const Wrapper = styled.div`
  "& + &": {
    marginTop: 1rem
  },
  label: {
    fontSize: 1rem;
    color: blue;
    marginBottom: 0.25rem
  },
  input : {
    width: 100%;
    border: red;
    outline: none;
    borderRadius: 0px;
    lineHeight: 2.5rem;
    fontSize: 1.2rem;
    paddingLeft: 0.5rem;
    paddingRight: 0.5rem;
  }
`