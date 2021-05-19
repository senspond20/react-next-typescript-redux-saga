import React from "react";
import styled from "styled-components";
import Common from "components/Templates/styles/Common";

const TopBtn = styled.div`
  ${Common.nonSelect};
  position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; 
  background-color: ${Common.palette.BLUE[8]}; color: white; 
  ${Common.flex.flexCenter};
  cursor: pointer;
`;
/**
 * 최상단으로 이동
 */

const eventHandler = () =>{
    console.log('Top')
    // 바로
    //window.scrollTo(0, 0)
    // 부드럽게
    // const root = document.getElementById('__next');
    // console.log(root)
    // root?.scroll({
    //     behavior:'smooth',
    //     top : 0,
    //     left : 0
    // })

    window.scroll({
        behavior:'smooth',
        top : 0,
        left : 0
    })
}

function GoToTop(){

    return(
        <TopBtn onClick={eventHandler}>Top</TopBtn>
    )
}
export default GoToTop;