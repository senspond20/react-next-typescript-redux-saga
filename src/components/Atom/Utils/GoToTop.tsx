import React from "react";
import styled from "styled-components";
import Common from "styles/Common";

const TopBtn = styled.div`
  ${Common.nonSelect};
  position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; 
  background-color: ${Common.palette.BLUE[8]}; color: white; 
  ${Common.flex.flexCenter};
  cursor: pointer;
`;
function GoToTop(){
    /**
     * 최상단으로 이동
     */
    const eventHandler = () =>{
        // 바로
        //window.scrollTo(0, 0)
        // 부드럽게
        window.scroll({
            behavior:'smooth',
            top : 0,
            left : 0
        })
    }
    return(
        <TopBtn onClick={eventHandler}>Top</TopBtn>
    )
}
export default GoToTop;