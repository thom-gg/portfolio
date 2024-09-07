import presentation from '../assets/resumebot/presentation.png'
import demo from '../assets/resumebot/demo.mp4'
import resumeIcon from '../assets/icons/resumeIcon.png'
import preview from '../assets/resumebot/preview.png'
import React, { useState } from 'react';


function ResumeBot() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={resumeIcon} />
                <p>Resume generator bot</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Resume generator telegram bot</div>
                        <div className="title-bar-controls">
                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">
                        <div className="contentWindowContainer" >
                            <h1>Description</h1>
                            <p>This is a Telegram bot made to help you create a resume</p>

                            <img src={presentation} style={{ width: "100%" }} />
                            <h1>Demo</h1>
                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                <video className="demoVideo" controls >
                                    <source src={demo} type="video/mp4" />
                                </video>
                            </div>
                            <p>Here is the result of this demo:</p>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <img src={preview} style={{ border: "1px solid black", width: "90%" }} />
                            </div>


                            <h1>How does it work ?</h1>
                            <p>The bot is written in TypeScript using the Grammy framework (grammy.dev), and it uses the docxtemplater package to edit .docx files.
                                The conversations plugins allows to easily keep track of the data until all questions are answered
                            </p>

                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default ResumeBot;
