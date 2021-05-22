import React, {useCallback, useEffect, useState} from "react";
import "highlight.js/styles/gruvbox-dark.css"
import styled from "styled-components";
import createHighlightedCodeBlock from 'components/Atom/Utils/CustomMarked'

type Props ={
    content : string
}

export default function createMarkup ( {content} : Props) {
    // @ts-ignore
    const html = {__html: createHighlightedCodeBlock(content, false) };
    return ( <MarkStyle dangerouslySetInnerHTML={html}/> )
}


const nonSelect = {
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    'user-select': 'none'
}

const MarkStyle = styled.div`
  width: 70%;
  margin: 0 auto;

  pre, code {
    padding: 0 0px 0px 0px;
    border-radius: 6px;
    line-height: 1.1rem;
  }

  pre {
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.4);
  }

  code {
    //padding: 0 5px 0 5px;
    //width: fit-content;
    //padding : 0 20px;
    //border-radius: 4px;
  }

  table {
    border-collapse: collapse;

    tbody:before {
      content: "-";
      display: block;
      line-height: 3px;
      color: transparent;
    }
  }

  td.line-number {
    display: inline-block;
    text-align: center;
    color: #ccc;
    border-right: 1px solid #999;
    vertical-align: top;
    padding-right: 5px;
    ${nonSelect}
  }

  td.line-content {
    padding-left: 5px;
  }

  code {
    span {
      //font-weight: bolder;
      //font-size: larger;
      //text-overflow: ellipsis;
    }
  }

  /* Technique to disable line numbers from being selected and copied. 
     Checkout this post for more details http://codepen.io/danoc/pen/ByGKZv */

  [data-pseudo-content]::before,
  [data-pseudo-content--before]::before,
  [data-pseudo-content--after]::after {
    content: attr(data-pseudo-content);
  }

  .code-header {
    display: inline-block;
    width: 100%;
    //.left{
    //  float: left;
    //}
    background: rgb(20, 55, 128);
    //background: linear-gradient(to right, rgb(8, 34, 101), rgb(20, 55, 128), rgb(255, 255, 255));
    padding: 2px 0px;
    //background: #cccccc;
    //border-bottom: 1px solid #eee;
    ${nonSelect}
  }

  .code-header-left {
    float: left;
    width: fit-content;
    //background: #282828;
    //font-size: larger;
    font-size: 0.8rem;
    font-weight: bolder;
    margin: 0;
    padding: 0px 6px;
    //border-radius: 1px;
  }

  .code-header-right {
    float: right;

    span {
      cursor: pointer;
      //font-size: larger;
      font-size: 0.7rem;
      color: #99b3ee;
      font-weight: 700;
      background: rgba(0, 0, 0, 0.015);
      //color: rgba(23, 158, 229, 1);
      padding: 0px 5px;
    }
  }

  textarea.code-copy {
    display: none;
  }
`