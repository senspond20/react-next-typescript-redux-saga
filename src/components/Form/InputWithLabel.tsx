import React from "react";
import styled from "styled-components";

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
type Props ={
    className? : string
    label : string,
    rest : string
}
const handle = ({className,label,...rest} : Props) =>{
    return(
        <Wrapper className={className}>
            <label>{label}</label><input type={'text'} {...rest}/>
        </Wrapper>

    )

}
export default handle;