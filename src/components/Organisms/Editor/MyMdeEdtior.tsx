import React, { useEffect, useRef, useState} from "react";
import CustomMarkdownRenderer from "@components/Organisms/Renderder/CustomMarkdownRendererV3";
import styled from "styled-components";

const Container = styled.article`
  width: 100vw;
  height: 100vh;
  div{
    margin: 0 auto;
  }
  pre code {
    white-space: pre;
  }
`
const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .left-input-mark{
    width: 40%;
    border-right: 1px solid #333;
    textarea{
      margin: 0 auto;
      -moz-appearance: textfield-multiline;
      -webkit-appearance: textarea;
      border: 1px solid gray;
      font: medium -moz-fixed;
      //font: -webkit-small-control;
      height: 100%;
      overflow: auto;
      padding: 2px;
      resize: both;
      width: 400px;
    }
  }
  .right-output-html{
    width: 40%;
  }
`;


type Html ={
    __html : string

}
const inputttt = `
# h1
## h2
### h3
#### h4
##### h5
###### h6

|제목|내용|
|---|---|
|하이|오잉|
|아잉|아우|

+ javascript

\`\`\`js
console.log(3)
\`\`\`

+ java

\`\`\`java
public class Test{
    private String name;
}
\`\`\`

+ c언어

\`\`\`c
#include <stdio.h>

int main(){
   printf("%s","dd");
   return 0;
}
\`\`\`
`

function MarkDownEditor(){
    const [input, setInput] = useState<string>(inputttt)
    const [output, setOutput] = useState<string>('');

    /**
     * TypeScript에서 textarea useRef에는 반드시 HTMLTextAreaElement 타입이 정의되어야 한다
     */
    const markdownRef = useRef<HTMLTextAreaElement>(null);

    useEffect(()=>{
        markTohtml()
        console.log(markdownRef)

    },[])

    /**
     * 에디터에서 글을 작성시 수시로 input이 변하는데 
     * 그때마다 다시 수시로 랜더링되면 성능 문제가 발생하는 부분에 대해서는 좀더 고찰해볼것
     */
    useEffect(()=>{
        // @ts-ignore
        const current : string = markdownRef.current?.value;
        console.log(current)
        setInput(current);
    },[input]);

    /**
     * @param e : React.ChangeEvent<HTMLTextAreaElement>
     */
    const handleChange = (e : React.ChangeEvent<HTMLTextAreaElement>)=>{
        const value =  e.target.value;
        setInput(value);
        // console.log(value)
        markTohtml();
    }
    // useMemo(()=> markTohtml,[input]);

    function markTohtml() {
        // const code = document.querySelectorAll('pre code');



        // setOutput(rawMarkup);

        return output;
    }


    return (
        <Container>
            <form method={'post'}>
                <button type={'submit'}>전송</button>
                <div className={'editor-wrapper'}>
                    <h1>Markdown Parser</h1>
                    <FlexWrapper>
                        <div className={'left-input-mark'}>
                            <h4>Input - Markdown</h4>

                            <textarea
                                name={'origin'}
                                defaultValue={input}
                                onChange={handleChange}
                                ref={markdownRef}
                            />
                        </div>
                        {/*<button onClick={handleChange}>변환</button>*/}
                        <div className={'right-output-html'}>
                            <h4>Output - Html</h4>
                            <CustomMarkdownRenderer content={input}/>
                            {/*<div dangerouslySetInnerHTML ={{__html : output}}></div>*/}
                        </div>
                    </FlexWrapper>
                </div>
            </form>

        </Container>
    )
};

export default MarkDownEditor;

