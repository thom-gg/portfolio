import gameIcon from '../assets/icons/gameIcon.png'
import banner from '../assets/solachess/banner.png'
import demo from '../assets/solachess/demo.mp4'
import React, { useState } from 'react';


function Solachess() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={gameIcon} />
                <p>Solachess (on-chain)</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Solachess: on-chain chess application on Solana</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >
                            <img src={banner} style={{ width: "100%" }} />
                            <h1>Description</h1>
                            <p>This is an on-chain chess application on Solana, using Anchor framework. I wanted to start building on Solana and this idea came to my mind as an interesting project, to practice on multiple things, as well on the backend (smart contract) than on the frontend.</p>
                            <p>Solana's speed made it really interesting compared to other chains I could have done this on, because there is almost no latency between plays, so players can have a smooth experience.</p>
                            <h1>Demo</h1>
                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                <video className="demoVideo" controls >
                                    <source src={demo} type="video/mp4" />
                                </video>
                            </div>

                            <h1>How does it work ?</h1>
                            <p>The front-end uses Next.js framework. The back-end uses Anchor framework, because of all the additional checks, and the ease to write programs it provides. </p>
                            <p>The different pages use event listeners from the solana/web3.js library, to catch changes on the blockchain as soon as they happen.</p>

                            <h1>Try it and take a look at the code</h1>
                            <p>You can try the application on <a target="_blank" href="https://solachess.netlify.app/">https://solachess.netlify.app/</a>, and take a look at the code on <a target="_blank" href="https://github.com/thom-gg/solachess/">my Github</a></p>

                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Solachess;
