import gameIcon from '../assets/icons/gameIcon.png'
import swapPreview from '../assets/swap/swap_preview.png'
import demo from '../assets/solachess/demo.mp4'
import swapIcon from '../assets/icons/swapIcon.png'

import React, { useState } from 'react';


function Swap() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={swapIcon} />
                <p>Swap tokens on-chain</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Swap tokens on-chain (MultiversX)</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >
                            <h1>Description</h1>
                            <p>This is an on-chain application on MultiversX allowing to swap EGLD (the native blockchain currency), for an ESDT token (other currencies that anyone can create)</p>
                            <p>The token has a fixed exchange rate, that can be managed by the administration team.</p>
                            <img src={swapPreview} style={{ width: "100%" }} />


                            <h1>How does it work ?</h1>
                            <p>The backend is a Smart Contract written in Rust, and the frontend is a ReactJS application</p>

                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Swap;
