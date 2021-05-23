import React, {useEffect} from "react";
import styled from "styled-components";

type Props = {
    isOpen : boolean;
    content : string
}
export default function ClipModal(props : Props){
    const doCopy = (value : string) =>{

        if (!document.queryCommandSupported("copy")) {
            return alert("복사하기가 지원되지 않는 브라우저입니다.");
        }
        const textarea = document.createElement("textarea");
        if (textarea) {
            textarea.value = value;
            textarea.style.top = String(0);
            textarea.style.left = String(0);
            textarea.style.display = "fixed";
        }
        document.body.appendChild(textarea);
        textarea.focus();   // focus() -> 사파리 브라우저 서포팅
        textarea.select();  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    useEffect(()=>{

        if(props.isOpen) { // modal 창을 열였을때 실행
            //doCopy(props.content)
        }

    },[])

    return(
        <ModalWrapper>
            <div>

            </div>
        </ModalWrapper>
    )
}

const nonSelect = {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
}

const ModalWrapper = styled.div`
  .modal-wrapper {
    background: rgba(0, 0, 0, 0.16);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100vh;
    ${nonSelect};
  }

  .modal-item {
    transition: 1s;
    background: #fefdfe;
    border-radius: 10px;
    //margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -80%);
    box-shadow: 12px 12px 2px 1px rgba(18, 71, 190, 0.4);
    //box-shadow: 12px 12px 2px 1px rgba(23, 158, 229, 0.4);
    //box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    width: 320px;
    height: 110px;
    //min-width: 100px;
    text-align: center;
    display: block;
  }

  .modal-btn-area {
    float: right;
  }

  .modal-message-area {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;

    .modal-message {
      width: 300px;
      margin-top: 15px;
      height: 60px;
    }

    p {
      font-size: 16px;
      padding-bottom: 3px;
      border-bottom: 1px solid #eee;
    }

    span {
      font-size: 12px;
      color: rgba(23, 158, 229, 0.8);
    }
  }
`

// const ClickWrapper = styledUtil<Prop>()(styled.div)`
const ClickWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  cursor: pointer;
  ${nonSelect};
  :hover{
    color: ${(props : any) => props.hoverColor || '#0070f3'};
  }
`

