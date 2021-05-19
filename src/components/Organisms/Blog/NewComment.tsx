import React from "react";
import styled from "styled-components";
import commonStyle from "@components/Templates/styles/Common";
const NewCommentWrap = styled.div`
   padding : 15px 0px 25px 0px;
   border-top: 1px solid #eee;
  height: 100%;
  width: 100%;
`
const InputWrap = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 90px;
    border: 1px solid #eee;
    border-radius: 4px;
    resize: none;
    padding: 10px;
    font-size: 1rem;
    font-weight: bolder;
    color: #777;
  }
  textarea:focus{
    outline: none;
  }
  textarea::placeholder{
    color : rgba(0,0,0,0.24);
  }
  margin-bottom: 0.3px;
`
const NewCommentBtn = styled.div`
  background: ${commonStyle.palette.BLUE[8]};
  color: #cccccc;
  outline: none;
  width: 20%;
  float: right;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
`;
const NewComment= () =>{
    alert('로그인이 필요한 서비스입니다')
}
const handle = () =>{
    // 글자수 측정
    console.log(commonStyle.palette.BLUE[9])
    return(
        <NewCommentWrap>
            <InputWrap>
                <textarea placeholder={'★ 새로운 댓글을 달아보세요'}/>
            </InputWrap>
            <NewCommentBtn onClick={NewComment}>
                <div>
                    등록
                </div>
            </NewCommentBtn>
        </NewCommentWrap>
    )
}
export default handle;
