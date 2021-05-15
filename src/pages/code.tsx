import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const Component = () => {
    const codeString = `
        function addOne(num){
            return num + 1;
        }
        console.log(addOne(5));
    `;
    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {codeString}
        </SyntaxHighlighter>
    );
};

export default Component;