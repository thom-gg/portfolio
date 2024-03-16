import dirIcon from '../assets/icons/dirIcon.png'
import filegram from '../assets/filegram/filegram.png'
import filegramFileSystem from '../assets/filegram/filegramFileSystem.png'
import telegramPost from '../assets/filegram/telegramPost.png'
import React, { useState } from 'react';


function Filegram() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={dirIcon} />
                <p>Filegram (storage)</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>

                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Filegram: free unlimited storage on Telegram's servers</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >


                            <img src={filegram} style={{ width: "60vw" }} />
                            <h1>Description</h1>
                            <p>This is a web telegram client, modified to store files, unlimited, and for free, on Telegram's servers. I used to do it using the regular Telegram client, so I thought it would be interesting to create a proper interface for it. The way I did it also includes folders, and a file tree system, to easily find what you're looking for.</p>
                            <h1>Why ?</h1>
                            <p>For years, I've been using Telegram to send files, so I can find them and download them on any device, and if I have an issue with my computer or anything, it's saved somewhere. One day I saw on Twitter that people did a FTP system on Discord server, and it made me think it would be interesting to do something like this on Telegram, especially since I would use it pretty much everyday.</p>
                            <p>Telegram is aware of this kind of use of their servers and even jokes about it on their socials</p>
                            <img src={telegramPost} style={{ width: "100%" }} alt="" />
                            <h1>How does it work ?</h1>
                            <p>I started by forking a telegram official web client, available as open source on Github (<a target="_blank" href="https://github.com/evgeny-nadymov/telegram-react">https://github.com/evgeny-nadymov/telegram-react</a>), to have all the authentication system set up and some examples of how the api was used. Then, I built on top of this all the file system and all the interface. The client does not display messages channels like a regular Telegram client, but only my interface for files</p>
                            <img src={filegramFileSystem} style={{ width: "100%" }} />
                            <p>The file system works by putting the absolute path in the text content of the message, and then, on the website, searching for the path you're currently looking into</p>


                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Filegram;
