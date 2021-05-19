import SquareButton from "components/Atom/Buttons/SquareButton";
import React from "react";

const style ={
    position: 'fixed', 


} 

function GoToTopWithButton(){
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
        <SquareButton>Top</SquareButton>
    )
}
export default GoToTopWithButton;