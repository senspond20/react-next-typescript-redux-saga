import CodeMirror from '@uiw/react-codemirror';
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/monokai.css';

const code = 'const a = 0;';

const handle = () =>{
    return(
        <CodeMirror
            value={code}
            options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
        />
    )
}
