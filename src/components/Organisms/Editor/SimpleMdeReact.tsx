import React, {useMemo, useState} from "react";
import ReactDOMServer from 'react-dom/server';
import dynamic from "next/dynamic";
import SimpleMDE from "easymde";
const SimpleMdeReact = dynamic(import('react-simplemde-editor'), {ssr: false})
// import "easymde/dist/easymde.min.css";

import CustomMarkdownRenderer from "@components/Organisms/Renderder/CustomMarkdownRendererV3";
import "highlight.js/styles/gruvbox-dark.css"
import styled from "styled-components";

const Wrapper = styled.div`
  .editor-toolbar{
    background: #333;
  }
  .editor-preview-side{
    float: right;
  }
`;
const MARKDOWN_TEXT = `# My Custom Editor

# My Custom Editor

**Custom Editor**

\`\`\`js
import React, {EventHandler, MouseEventHandler, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import CustomMarkdownRenderer from "@components/Organisms/Renderder/CustomMarkdownRenderer";
import ContentEditable from 'react-contenteditable'
import ReactModal from "@components/Molecules/Modal/ReactModal";
const Container = styled.div\`
  @media screen and (max-width: 1080px){
    .sensingEditor .outputHtml{ display: none !important; }
    .sensingEditor .toggle{ display: none;}
  }
  .sensingEditor .flex-c{display: flex; justify-content: center; align-items: center;}
  .sensingEditor .styling input{background-color: #333; color: #fff;border-radius: 1px;  cursor: pointer;}
  .sensingEditor .styling input:hover{background-color: #eee;}
  .sensingEditor .editor {background-color:#fff; border: 1px solid #f0f0f0; border-radius: 5px;}
  .sensingEditor .editor .writer{ white-space: pre-wrap; overflow-y: scroll; float: left; width: 100vw; height: 70vh; padding: 20px 20px; outline: none; }
  /* .sensingEditor .editor .textArea {  } */
  .sensingEditor .toggle {float: right; cursor: pointer; background-color: #333; padding: 7px; border-radius: 10px;}
  //.sensingEditor .editor .outputHtml { background-color: #fff; color:#333;}
  .sensingEditor .outputHtml{  width: 100vw; height: 70vh; background-color: #fefefe;overflow-y: scroll;}
  .sensingEditor .btn {display: flex; justify-content: center; align-items: center; width: 15vw; background-color: rgb(160, 150, 156); color:#fff; height: 40px; border-radius: 10px; cursor: pointer;}
  .sensingEditor .btn:hover { background-color: rgb(216, 210, 214);}

\`
interface KonvaTextEventTarget extends EventTarget {
    index: number
}
interface KonvaMouseEvent extends React.MouseEvent<HTMLElement> {
    target: KonvaTextEventTarget
}

function DivEditor(){
    const [input, setInput] = useState<string>('\`\`\`js\\nconsole.log(3)\\n\`\`\`');
    const [output, setOutput] = useState<string>('\`\`\`js\\nconsole.log(3)\\n\`\`\`');
    const [command, setCommand] = useState<any>();
    // @ts-ignore
    const inputRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        // // console.log(inputRef.current?.innerText);
        //     setInput(input);
        // document.execCommand('defaultParagraphSeparator', false, 'p');
    },[])

    useEffect(()=>{
        const origin = command;
        console.log(command)
        setCommand(null);
        document.execCommand(origin);
    },[command])

    // useEffect(()=>{
    //     const body = document.querySelector('body');
    //     body?.addEventListener('keypress',handleKeyPress);
    // },[])
    useEffect(()=>{
        const body = document.querySelector('body');
        body?.addEventListener('keyup',handleKeyPress);
        // return () =>{
        //     body?.removeEventListener('keyup',handleKeyPress);
        // }
    },[])

    const removeBr = (txt : string) =>{
        return txt.replace(/<br\\/>/ig,"");
    }
    // @ts-ignore
    const handleKeyPress = (e : KeyboardEvent<HTMLTextAreaElement>) => {
        // if(e.charCode === 13) { //  deprecated
        //   this.handleClick();
        // }
        // e.cancelBubble = true;
        e.preventDefault();
        // e.stopPropagation();
        // e.stopImmediatePropagation();

        let vKey = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        if(e.altKey){
            switch (vKey){
                case 49 : console.log('h1'); // @ts-ignore
                    // const inner : HTMLTextAreaElement= document.querySelector('.input-markdown');

                    // @ts-ignore
                    // inner.value = '#';
                    const newValue = inputRef.current?.innerHTML + '# '

                    // inputRef.current?.focus()
                    setInput( removeBr(newValue))
                    // console.log(inner?.value);

                    break;

                case 50 : console.log('h2');
                    const newValue2 = inputRef.current?.innerHTML + '## '
                    // inputRef.current?.focus()
                    setInput(newValue2)
                    // console.log(inner?.value);
                break;
                case 51 : console.log('h3');document.execCommand('insertHTML',false, '#'); break;
                case 52 : console.log('h4');
                    document.execCommand('insertHTML',false, '\\n\`\`\`js\\ncode\\n\`\`\`');
                break;
                case 53 : console.log('h5'); break;
                case 54 : console.log('h6'); break;
            }
        }
    };

    const handleChange = (e : any) =>{
        // e.preventDefault();
        // console.log(inputRef.current)
        const value : string = inputRef.current?.innerHTML || '';
        const ovalue : string = inputRef.current?.innerText || '';
        // console.log(value)
        const selection = window.getSelection();
        const range = selection?.getRangeAt(0);
        // const boundingClientRect = range?.getBoundingClientRect();
        console.log(range)

        setInput(value)
        setOutput(ovalue);
    }
    const codeInput = () =>{

    }
    return(
        <Container>
            <form name="sensingFrm" className="sensingEditor">
                <div className="flex-c"><h1>sensingEditor</h1></div>
                <div className="styling">
                    <input type="button" value="clear" onClick={()=> setCommand(null)}/>
                    <input type="button" value="B" onClick={()=> setCommand('bold')}/>
                    <input type="button" value="Italic" onClick={()=> setCommand('Italic')}/>

                    <input type="button" value="Italic" onClick={()=> setCommand('Italic')}/>

                    <input type="button" value="Underline" onClick={()=>document.execCommand('Underline')}/>
                    <input type="button" value="Code" onClick={codeInput} />
                    {/*<input type="button" value="StrikeThrough" onClick="exc('StrikeThrough')"/>*/}
                    {/*<input type="button" value="왼쪽 정렬" onClick="exc('justifyleft')"/>*/}
                    {/*<input type="button" value="가운데 정렬" onClick="exc('justifycenter')"/>*/}
                    {/*<input type="button" value="오른쪽 정렬" onClick="exc('justifyright')"/>*/}
                </div>
                <div className="editor flex-c">
                    {/*<div className="item textArea" contentEditable="true" ref={inputRef}></div>*/}


                    <ContentEditable className="writer textArea"
                        innerRef={inputRef}
                        html={input} // innerHTML of the editable div
                        disabled={false}       // use true to disable editing
                        onChange={handleChange} // handle innerHTML change
                    />
                    <div className="outputHtml">
                        <CustomMarkdownRenderer content={output}/>
                    </div>
                    {/*<div dangerouslySetInnerHTML={{__html : <CustomMarkdownRenderer content={output}/>}}></div>*/}
                    {/*<textarea className="writer textArea" value={} />*/}
                </div>
                <div className="toggle">Toggle</div>
                <div className="btnArea flex-c">
                    <button className="btn submit">Sumbit</button>
                    <button className="btn cancel">Cancel</button>
                    {/*<button onClick={()=>window.open('/')}>클릭</button>*/}
                </div>
            </form>
            <ReactModal/>
        </Container>
    )
}
export default DivEditor;

\`\`\`
`;

export default function SimpleMdeReactEditor(){
    const [value, setValue] = useState(MARKDOWN_TEXT);

    const onChange = (value: string) => {
        setValue(value);
    };
    const autofocusNoSpellcheckerOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
        };
    }, []);

    const customRendererOptions = useMemo(() => {
        return {
            autofocus: true,
            spellChecker: false,
            previewRender() {
               return ReactDOMServer.renderToString(<CustomMarkdownRenderer content={MARKDOWN_TEXT}/>)
            },
        } as SimpleMDE.Options;
    }, []);

//editor-preview-side
    return (
        <Wrapper>
            {/*<button onClick={customRendererOptions}>클릭</button>*/}
            <SimpleMdeReact
                options={customRendererOptions}
                value={value}
                onChange={onChange}
            />
        </Wrapper>

    );
};


