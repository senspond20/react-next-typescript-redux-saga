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

**Custom Editor**

\`\`\`java
public class Test{
\tprivate String name;
\tprivate String email;
\tprivate Test(String name, String email){
     this.name = name;
     this.email = email;
  }
  private getName(){
    return this.name;
  }
  private getEmail(){
    return this.email;
  }
}
\`\`\`

|1|2|3|
|--|--|--|
|412|24|34|
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


