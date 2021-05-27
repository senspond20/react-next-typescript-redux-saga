import React from "react";
import styled, {ThemeProvider} from "styled-components";
import InputV1 from "@components/Atom/Input/InputV1";
import LabelV1 from "@components/Atom/Label/LabelV1";
import BarV1 from "@components/Atom/Bar/BarV1";

interface Props  extends React.ComponentPropsWithoutRef<"input">{
    label : string,
}

export default function InputBoxGroup(prop : Props){
    const {label, ...rest} = prop;
    return(
        <InputGroup className="input-group">
            <InputV1 {...rest}/>
            <BarV1 className="bar"/>
            <LabelV1>{label}</LabelV1>
        </InputGroup>
    )
}

const InputGroup = styled.div`
   position: relative;
   margin-bottom: 45px;
  input:focus ~ label, input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: ${prop => prop.theme.green};
  }
  input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }
`;
