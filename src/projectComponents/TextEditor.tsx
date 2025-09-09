import textEditorIcon from '../assets/icons/textEditorIcon.png'
import banner from '../assets/textEditor/banner.png'
import React, { useState } from 'react';


function TextEditor() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={textEditorIcon} />
                <p>C++ Text Editor</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>

                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Minimalist text editor written in C++</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >


                            <img src={banner} style={{ width: "100%" }} />
                            <h1>Description</h1>
                            <p>This is a basic text editor written in C++, using as little libraries as possible. I used Qt to have a window system with input listeners that works out of the box, but not using any other built-in functions from Qt.</p>
                            <p>It was mostly just a learning project to get more experience in C++, and find out about the data structures used in text editors, such as a gap buffer.</p>
                            <h1>Features</h1>
                            <p>To handle the text content of the editor, I implemented a gap buffer, which is a data structure made for quick insertion / deletion of characters inside a string.</p>                           
                            <p>It works by leaving a gap in the buffer (captain obvious), that does not represent the actual content but just some unused memory area that can be used on the spot when needed.</p>
                            <p>When inserting characters, the gap may ran out of space, therefore it'll need to allocate more memory, but for most interactions this won't happen so average time complexity for insertion or deletion is O(1). More info: <a target="_blank" href="https://en.wikipedia.org/wiki/Gap_buffer">https://en.wikipedia.org/wiki/Gap_buffer</a>.</p>
                            <p>Other implemented features: line breakings, zoom in / out, scrolling, text selection, word selection with double click, copy and paste, undo / redo stacks, loading and saving of files.</p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default TextEditor;
