import React from "react";
import styled from "styled-components";
import commonStyle from "styles/Common";

const ThisPlus = styled.article`
  display: flex;
  margin-top: 10px;
  .plus-icon{
    background: ${commonStyle.palette.BLUE[8]};
    color: #cccccc;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }
  .plus-score{
    margin-left: 10px;
  }
`;
/**
 *
 */
const showMeTheMoney =() =>{

};
type Props = {
    count : number;
}
const handle = ({count} : Props) =>(

    <ThisPlus>
        <div className={'plus-icon'}>+</div>
        <div className={'plus-score'}><span onClick={showMeTheMoney}>{count}</span>개 댓글</div>
        <div className={'plus-show-man'}></div>
    </ThisPlus>
)

export default handle;