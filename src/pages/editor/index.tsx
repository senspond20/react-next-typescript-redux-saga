import React from "react";
import {InitEditorType} from "@components/Editor/TuiEditor"
import styled from "styled-components";
import dynamic from "next/dynamic";
const TuiEditor = dynamic(() => import("@components/Editor/TuiEditor"), {
    ssr: false,
})

const Container = styled.div`
  .tui-editor{
    //background: #333333 !important;
    //color: #ededed !important;
  }
  //.CodeMirror{
  //  background: #333333 !important;
  //  color: #ededed !important;
  //  font-size: larger;
  //}
  //.tui-editor .te-ww-mode {
  //  background: #333333 !important;
  //}
  //.tui-editor-defaultUI{
  //  background: #333333 !important;
  //}
  //button.sendBtn{
  //  width: 100%;
  //  background: #0055aa;
  //  color: #ededed;
  //  cursor: pointer;
  //  margin-top: 1px;
  //}
`
const submit = (e :any) =>{
    e.preventDefault();

}
const MyEditor = () =>(
    <Container>
        <form>
            <button className={'sendBtn'} onSubmit={submit}>저장</button>
            <TuiEditor initialValue={"안녕"}
                       initialEditType={InitEditorType.html}
                        height={'95vh'}/>

        </form>
    </Container>

);
export default MyEditor;