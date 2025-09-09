import imageIcon from '../assets/icons/imageIcon.png'
import showcase from '../assets/virtualGreenScreen/showcase.png'
import realTimePreview from '../assets/virtualGreenScreen/realTimePreview.png'
import React, { useState } from 'react';


function VirtualGreenScreen() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={imageIcon} />
                <p>Virtual Green Screen</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>

                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Virtual Green Screen desktop application for both offline and real-time processing</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >
                            <img src={showcase} style={{ width: "100%" }} />
                            <h1>Description</h1>
                            <p>This is a desktop application to remove / modify the background on images or in realtime on the webcam.</p>
                            <p>The image segmentation is done using the U^2-Net model from Xuebin Qin et al. Official repository: <a target='_blank' href="https://github.com/xuebinqin/U-2-Net">https://github.com/xuebinqin/U-2-Net</a></p>
                            <h1>Real time</h1>
                            <p>Processed realtime webcam stream can be used in other applications (Discord, Zoom, ...), using the `pyvirtualcam` package that'll use the OBS Virtual Webcam stream.</p>
                            <p>This model inference is quite long, it'll automatically run on CUDA if available on your computer, but I will try to add a faster model to the application.</p>
                            <img src={realTimePreview} style={{width: "80%"}} />
                            <h1>GitHub repository</h1>
                            <p>The repository can be found here: <a target="_blank" href="https://github.com/thom-gg/virtual-green-screen">https://github.com/thom-gg/virtual-green-screen</a></p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default VirtualGreenScreen;
