import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px 10px;
  border-top: 1px solid #eee;
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

const handle=()=>{
    return(
        <Wrapper>
            <ul>
                <li>
                    <textarea defaultValue={'안녕하세요 문제글입니다; 방가워요'} readOnly={true}/>
                    <ul>+</ul>
                    <li>
                        대댓글1
                    </li>
                    <li>
                        대댓글2
                    </li>
                </li>
                <li>
                    <textarea defaultValue={'안녕하세요 문제글입니다; 방가워요'} readOnly={true}/>
                    <ul>+</ul>
                    <li>
                        대댓글1
                    </li>
                    <li>
                        대댓글2
                    </li>
                </li>

            </ul>
        </Wrapper>
    )
}
export default handle;