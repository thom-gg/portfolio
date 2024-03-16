import gameIcon from '../assets/icons/gameIcon.png'
import swapPreview from '../assets/swap/swap_preview.png'
import demo from '../assets/solachess/demo.mp4'
import swapIcon from '../assets/icons/swapIcon.png'
import terminalIcon from '../assets/icons/terminalIcon.png'

import React, { useState } from 'react';


function Infos() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={terminalIcon} />
                <p>Infos</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Informations</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >
                            <h1>Hello</h1>
                            <p>This is my portfolio, where I show some projects I did and I think are interesting to see.</p>
                            <p>You can see more about each project by clicking on the icon, and it will open a window with text, pictures, and sometimes demonstration video inside</p>

                            <h1>My Github</h1>
                            <p>Here's my github profile,  <a target="_blank" href="https://github.com/thom-gg/">https://github.com/thom-gg/</a>, I'm willing to make more repositories public on it.</p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Infos;
