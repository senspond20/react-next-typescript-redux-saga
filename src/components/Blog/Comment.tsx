import React, {RefObject, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import commonStyle from "components/Templates/styles/Common";
// import ThisPlus from "@components/Blog/ThisPlus";
export type CommentItem ={
    name : string,
    thumbnail? : string,
    comment : string,
    date? : string,
    replyCount? : number
}
const Wrapper = styled.div`
   background-color: #ffffff;
   height: 130px;
   border-top: 1px solid #eee;
   border-bottom: 1px solid #eee;
   padding: 20px;
   margin-top: 20px;
   font-size: smaller;
  ${commonStyle.flex.flexCenter};
  article{
    width: 90%;
    height: 90%;
    display: flex;
  }
  .comment-left{
    clear: both;
    float: left;
    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .comment-right{
    clear: both;
    float: right;
    ${commonStyle.flex.flexCenter};
  }
`;

const Comment = styled.div`
    ${commonStyle.flex.flexCenter};
    width: 100%;
    text-align: center;
    div.comment{
      min-width: 300px;
      //height: 100px;
      max-width: 400px;
      text-align: center;
      align-items: center;
    }
`
const ThisPlus = styled.article`
  display: flex;
  margin-top: 10px;
  cursor: pointer;
  background: #ffffff;
  -ms-user-select: none;
  -moz-user-select: none; 
  -webkit-user-select: none; 
  -khtml-user-select: none; 
  user-select:none;

  .plus-icon{
    background: ${commonStyle.palette.BLUE[8]};
    color: #ffffff;
    font-size: 1.3em; font-weight: 800;
    width: 1.3em;
    height: 1.3em;
    border-radius: 50%;
    text-align: center;
  }
  .plus-active{
    background: ${commonStyle.palette.PINK[6]};
  }
  .plus-score{
    margin: auto 10px;
    font-size: smaller;
    span{
      color: ${commonStyle.palette.PINK[6]};
    }
  }
`;

/**
 * Comment의 reply (대댓글)을 보여준다
 */

const handle=({name,thumbnail, comment,date , replyCount} : CommentItem)=>{
    const [isShow, setShow] = useState(false);
    const isCountZero : RefObject<any>= useRef();

    const showReply = () => {
        const count = isCountZero.current.value;
        if(count == 0) {
            alert('대댓글이 없습니다')
            setShow(false);
        }else{
            setShow(!isShow);
        }
    }
    return(
        <>
            <Wrapper>
                <article>
                    <div className={'comment-left'}>
                        <div>
                            {/*thumbnail*/}
                            <img src={'https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} alt={'썸네일'} />
                            <div>{name}</div>
                        </div>
                    </div>
                    <Comment>
                        <div className={'comment'}>
                            <p>{comment}</p>
                        </div>
                    </Comment>
                    <div className={'comment-right'}>
                        <div>
                        {date}
                        </div>
                    </div>
                </article>
            </Wrapper>
            <ThisPlus onClick={showReply}>
                {isShow === false && replyCount !== 0
                    ? <div className={'plus-icon'}><span>+</span></div>
                    : <div className={'plus-icon plus-active'}><span>-</span></div> }
                <div className={'plus-score'}>
                    <input ref={isCountZero} type={'hidden'} readOnly={true} value={replyCount}/>
                    <span>{replyCount}</span>&nbsp;개 댓글</div>
                <div className={'plus-show-man'}></div>
            </ThisPlus>
            {isShow
                ?(<div className={'reply-list'}>
                    대댓글 컴포넌트
                 </div>)
                : (null)
            }
        </>
    )
}
export default handle;