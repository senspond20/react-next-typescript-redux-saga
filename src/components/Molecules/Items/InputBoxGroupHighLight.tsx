import React from "react";
import styled from "styled-components";
import InputV1 from "@components/Atom/Input/InputV1";
import LabelV1 from "@components/Atom/Label/LabelV1";
import BarV1 from "@components/Atom/Bar/BarV1";

export default function InputBoxGroup(){
    return(
        <InputGroup className="input-group">
            <InputV1 type="text" required />
            <span className="highlight"></span>
            <BarV1 className="bar"/>
            <LabelV1>Name</LabelV1>
        </InputGroup>
    )
}


const InputGroup = styled.div`
   position: relative;
   margin-bottom: 45px;
  
  /* active state */
  input:focus ~ label, input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264AE;
  }


  /* active state */

  input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }

  /* HIGHLIGHTER ================================== */
  .highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }

  /* active state */
  input:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }
  /* ANIMATIONS ================ */
  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #5264AE;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
 
`;
