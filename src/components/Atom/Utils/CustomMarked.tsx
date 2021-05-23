import hljs from "highlight.js";
import marked from "marked";
import {useEffect} from "react";

export default function createHighlightedCodeBlock (content : string, useCopy : boolean) {
    useEffect(()=>{
        setMarked(useCopy);
    },[])
    const html = marked(content);
    return html;
}

function setMarked(useCopy : boolean){
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        langPrefix: "hljs language-",
        highlight: function (code : string, lang: string) {
            return highlightRender(code,lang, useCopy)
        }
    });
}

const highlightRender = (code:string, lang:string, useCopy: boolean)=>{
    console.log(useCopy)
    const html = hljs.highlightAuto(code).value;
    const uLang = lang.charAt(0).toUpperCase() + lang.slice(1);
    const  codePattern = /<span class="hljs-comment">(.|\n)*?<\/span>/g
    const adaptedHighlightedContent = html.replace(codePattern, (data: string) => {
        return data.replace(/\r?\n/g, () => {
            return '\n<span class="hljs-comment">'
        })
    })
    const contentTable = highlightLineTable(adaptedHighlightedContent);
    return highlightHtml(uLang,code,contentTable,useCopy);
}

const highlightLineTable = (adaptedHighlightedContent : string) => {
    const contentTable = adaptedHighlightedContent.split(/\r?\n/).map((lineContent: string, idx: number) => {
        return `<tr>
                      <td class='line-number' data-pseudo-content=${++idx}></td>
                      <td class="line-content">${lineContent}</td>
                </tr>`
    }).join('')
    return contentTable;
}

const highlightHtml = (uLang: string, code: string, contentTable: string, useCopy : boolean) =>{
    let resultHtml =  '';
    if(useCopy){
        resultHtml = `<div class="code-wrapper"><div class="code-header"><div class="code-header-left">${uLang}</div><div class="code-header-right"><span class="copy-click">Copy<textarea class="code-copy">${code}</textarea></span></div></div><table class='code-table'>${contentTable}</table></div>`;
    }else{
        resultHtml = `<div class="code-wrapper"><div class="code-header"><div class="code-header-left">${uLang}</div><div class="code-header-right"></div></div><table class='code-table'>${contentTable}</table></div>`;
    }
    return resultHtml;
}