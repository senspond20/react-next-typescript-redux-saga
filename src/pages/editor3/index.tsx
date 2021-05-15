import React from "react";
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

const App = () => {
    const [value, setValue] = React.useState("**Hello world!!!**");
    // @ts-ignore
    return (
        <div className="container">
            <MDEditor
                value={value}
                onChange={setValue}
            />
            <MDEditor.Markdown source={value} />
        </div>
    );
}
export default App;