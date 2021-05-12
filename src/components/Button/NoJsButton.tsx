import React from "react";
import styled from "styled-components";


type Props = {
    idx : number,
    width? : string,
    height? : string,
    defaultFgColor? :string,
    defaultBgColor? :string,
    defaultStyle? : string,
    activeFgColor? :string,
    activeBgColor? : string,
    activeStyle? : string,
    hoverColor?  : string,
    children? : string
}


const Component = (prop : Props) =>{
    const chk = (p : any, r : any) =>{
        return p ? p : r;
    }
    const obj = {
        width : chk(prop.width,'55px'),
        height : chk(prop.height,'20px'),
        defaultFgColor : chk(prop.defaultFgColor, '#333'),
        defaultBgColor : chk(prop.defaultBgColor, '#ededed'),
        defaultStyle : chk(prop.defaultStyle, ''),
        activeFgColor : chk(prop.activeFgColor, '#333'),
        activeBgColor : chk(prop.activeBgColor, '#ededed'),
        activeStyle : chk(prop.activeStyle, ''),
    }


    const NoJsButton = styled.div`
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -khtml-user-select: none; 
    input{
      display: none;
    } 
    label{
      display: block;
      width: ${obj.width};
      height: ${obj.height};
      padding:5px 5px;
      margin: 5px;
      text-align: center;
      align-items: center;
      border-radius: 6px;
      color: ${obj.defaultFgColor};
      background: ${obj.defaultBgColor};
      cursor: pointer;
      ${obj.defaultStyle};
    }
    label:hover{
      //opacity: 0.8;
    }
    input:checked + label{
      color: ${obj.activeFgColor};
      background:  ${obj.activeBgColor};
      ${obj.activeStyle};
    }
`;
    const id = 'nos-btn' + prop.idx;
    return(
        <NoJsButton>
            <input type={'checkbox'} id ={id}/>
            <label htmlFor={id}>
                {prop.children}
            </label>
        </NoJsButton>
    )
}
export default Component;