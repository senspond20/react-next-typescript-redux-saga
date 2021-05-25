import React, {useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import ContentEditable from "react-contenteditable";

const customStyles = {
    content : {
        // top                   : '50%',
        // left                  : '50%',
        // right                 : 'auto',
        // bottom                : 'auto',
        // marginRight           : '-50%',
        // transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

export default function ReactModal(){
    let subtitle : HTMLHeadingElement | null;
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function afterOpenModal() {
        if(subtitle)
            subtitle.style.color = '#f00';
    }
    function closeModal(){
        setIsOpen(false);
    }
    const [input, setInput] = useState<string>('```js\nconsole.log(3)\n```');
    const inputRef = useRef<HTMLDivElement>(null);
    const handleChange = () =>{


    }
    const upLoad = () =>{
        // @ts-ignore
        document.querySelector('.sensingEditor .editor .writer').focus();
        const v = '\`\`\`\n' + inputRef.current?.innerText.toString().trim() + '\n\`\`\`';
        console.log(v)
        document.execCommand('insertHTML',false, v);
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={_subtitle => (subtitle = _subtitle)}>이미지 업로더</h2>
                <button onClick={closeModal}>close</button>
                <ContentEditable className="temp-div"
                                 innerRef={inputRef}
                                 html={input} // innerHTML of the editable div
                                 disabled={false}       // use true to disable editing
                                 onChange={handleChange} // handle innerHTML change
                />
                <button onClick={upLoad}>upLoad</button>
            </Modal>
        </div>
    );
}
