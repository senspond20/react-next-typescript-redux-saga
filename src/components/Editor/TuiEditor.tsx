// @ts-ignore
import dynamic from 'next/dynamic';
import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor as EditorType, EditorProps } from '@toast-ui/react-editor';
import { TuiEditorWithForwardedProps } from './TuiEditorWrapper';
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";
import hljs from "highlight.js";
import codeSyntaxHighlightPlugin from "@toast-ui/editor-plugin-code-syntax-highlight";
import chart from '@toast-ui/editor-plugin-chart';
// Enum Type
export enum InitEditorType{
    markdown='markdown',
    html='wysiwyg'
}
//  next.js에서는 dynamic이라는 모듈을 제공해서 promise resolve 과정 없이도 변수에 할당할 수 있도록 해준다.

// const colorSyntaxPlugin = dynamic<any>(()=>import("@toast-ui/editor-plugin-color-syntax"),{ssr:false});

const Editor = dynamic<TuiEditorWithForwardedProps>(() => import("./TuiEditorWrapper"), { ssr: false });

const EditorWithForwardedRef = React.forwardRef<EditorType | undefined, EditorProps>((
    props,
    ref) => (
    <Editor {...props} forwardedRef={ref as React.MutableRefObject<EditorType>} />
));

// 이미지 업로드
// https://solve-programming.tistory.com/29

const TuiEditor : React.FC<EditorProps> = (props) => {
    const { initialValue, previewStyle, height, initialEditType, useCommandShortcut } = props;

    const editorRef = React.useRef<EditorType>();
    const handleChange = React.useCallback(() => {
        if (!editorRef.current) {
            return;
        }
    }, [props, editorRef]);

    // @ts-ignore
    return <div>
        <EditorWithForwardedRef
            {...props}
            initialValue={initialValue || "hello react editor world!"}
            previewStyle={previewStyle || "vertical"}
            height={height || "600px"}
            initialEditType={initialEditType || InitEditorType.markdown}
            useCommandShortcut={useCommandShortcut || true}
            ref={editorRef}
            onChange={handleChange}
            plugins ={[codeSyntaxHighlightPlugin.bind(hljs),chart]}
        />
    </div>;
};

export default TuiEditor;