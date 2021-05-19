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

/*
import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <h3>Go up!</h3>
        </div>
      )}
    </div>
  );
}
*/