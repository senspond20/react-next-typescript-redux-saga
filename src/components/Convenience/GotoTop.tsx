import React from "react";
import styled from "styled-components";
/**
 * 최상단으로 이동
 */
const goToTop = () =>{
    window.scrollTo(0, 0)
}
type TopBarProp ={
    link : string, name : string
}
const TopBtn = styled.div`
  position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background-color: #0f3d57; color: white; display: flex; justify-content: center; align-items: center; cursor: pointer;
`;
const handle =() =>{
    return(
        <TopBtn onClick={goToTop}>Top</TopBtn>
    )
}
export default handle;