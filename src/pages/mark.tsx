import React from "react";
import {render} from "react-dom";
import ReactMarkdown from "react-markdown";

import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CodeBlock from "@components/Code/CodeBook";

const test =() =>{
const mark = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`
    return(
        <ReactMarkdown remarkPlugins={[gfm]} children={mark}/>
    )
    // render(<ReactMarkdown># hello , *World* !</ReactMarkdown>, document.body);
}

// @ts-ignore
const comp = ({node, inline, className, children, ...props}) =>{
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter style={dark} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
        ) : (
            <code className={className} {...props} />
        )

}



const gtMark = () =>{
    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |


~~~js
function sum(a,b){
    return a+b;
}
console.log(5,7);
~~~

&lt;div class="note">ggg</div&gt;
`

    const input = `<div class="note">

Some *emphasis* and <strong>strong</strong>!

</div>`
    // @ts-ignore
    return(
        <div>d</div>
        // <ReactMarkdown remarkPlugins={[gfm]}
        //                components={comp}
        //                children={markdown}/>
    )
}
// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `Here is some JavaScript code:

~~~js
console.log('It works!')
~~~
`
const RenderedMarkdown = () => {
const content = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |


~~~js
function sum(a,b){
    return a+b;
}
console.log(5,7);
~~~

&lt;div class="note">ggg</div&gt;
`
    return(
        <div></div>
        // <ReactMarkdown
        //     children={content}
        //     remarkPlugins={[gfm]}
        //     renderers={{ code: CodeBlock }}
        // />
        )

}
export default RenderedMarkdown;
