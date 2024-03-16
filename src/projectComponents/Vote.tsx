import gameIcon from '../assets/icons/gameIcon.png';
import swapPreview from '../assets/swap/swap_preview.png';
import header from '../assets/vote/header.png';
import results from '../assets/vote/results.png';
import swapIcon from '../assets/icons/swapIcon.png';
import electionIcon from '../assets/icons/electionIcon.png';

import React, { useState } from 'react';


function Vote() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={electionIcon} />
                <p>Vote system on-chain</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Vote system smart contract (MultiversX)</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >
                            <img src={header} style={{ width: "100%" }} />

                            <h1>Description</h1>
                            <p>This is a voting on-chain application on MultiversX, allowing communities to elect representatives for a given duration. This project was for a NFT community about gangsters fictional characters.</p>
                            <p>I wrote all the on-chain part (the Smart Contract), and helped on the interaction part of the front-end (i.e how to send requests to the Smart Contract). Most of the front-end was done by someone else in the project, screenshots are only illustrations, since the part I did is not visual at all.</p>
                            <img src={results} style={{ width: "100%" }} />
                            <p>Each candidate wrote a description about what he wanted to do for the community, and once elected, had a privileged voice on the project's future.</p>
                            <h1>How does it work ?</h1>
                            <p>The backend is a Smart Contract written in Rust, and the frontend is a ReactJS application</p>
                            <p>The application was divided into 3 periods, as seen on top of the page: Application, Voting, and then Mandate</p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Vote;
