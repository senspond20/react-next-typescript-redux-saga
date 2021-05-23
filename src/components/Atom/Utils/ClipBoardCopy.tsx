import React from "react";

export function doCopy(content : string){
    checkEnableCopy();
    const textarea = document.createElement("textarea");
    if (textarea) {
        textarea.value =  content;
        textarea.style.top = String(0);
        textarea.style.left = String(0);
        textarea.style.display = "fixed";

        document.body.appendChild(textarea);
        textarea.focus();   // focus() -> 사파리 브라우저 서포팅
        textarea.select();  // select() -> 사용자가 입력한 내용을 영역을 설정할 때 필요
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
}

function checkEnableCopy(){
    if (!document.queryCommandSupported("copy")) {
        return alert("복사하기가 지원되지 않는 브라우저입니다.");
    }
}