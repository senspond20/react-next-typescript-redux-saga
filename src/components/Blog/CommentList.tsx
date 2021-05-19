import React from "react";
import styled from "styled-components";
import Comment, {CommentItem} from "@components/Blog/Comment";
import commonStyle from "components/Templates/styles/Common";
import ThisPlus from "@components/Blog/ThisPlus";
const Wrapper = styled.div`
  padding: 10px 10px;
  border-top: 1px solid #eee;
  margin-top: 20px;
  textarea {
    width: 100%;
    height: 140px;
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
`;

const dummyData : CommentItem[]= [
    {name:'아이린', date:'2021-05-11', comment:'안녕하세요 문제글입니다. 방가워요', replyCount: 4},
    {name:'아이삼', date:'2021-05-11', comment:'안녕하세요 안영후입니다. 방가워요 안녕하세요 안영후입니다. 방가워요 안녕하세요 안영후입니다. 방가워요', replyCount: 5},
    {name:'아이구', date:'2021-05-11', comment:`안녕하세요 안영후입니다. 방가워요 안녕하세요\n 안영후입니다. 방가워요 안녕하세요\n 안영후입니다. 방가워요`, replyCount: 0},
]
const handle=()=>{
    return(
        <Wrapper>
            {dummyData.map((item,idx)=> {
                return(
                        <Comment key={idx}
                                 name={item.name}
                                 thumbnail={item.thumbnail}
                                 date={item.date}
                                 comment={item.comment}
                                 replyCount={item.replyCount}
                        />
                )
            })}
        </Wrapper>
    )
};

export default handle;