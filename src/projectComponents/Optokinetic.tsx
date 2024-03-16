
import stimIcon from '../assets/icons/stimIcon.png'
import sphere from '../assets/optokinetic/sphere.png'
import React, { useState } from 'react';


function Optokinetic() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={stimIcon} />
                <p>Optokinetic stimulation</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>

                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Optokinetic stimulation using Virtual Reality</div>
                        <div className="title-bar-controls">

                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">


                        <div className="contentWindowContainer" >

                            <h1>Description</h1>
                            <p>This is a Virtual Reality application that I made for a physiotherapist in my circle, that helps curing visual vertigo, by stimulating the optokinetic reflex.</p>
                            <p> It has been used for a few months already and helped multiple patients !</p>
                            <p> I made it using Unreal Engine 5, which was completely new to me, and had to discover 3D modeling. The application works on a standalone VR headset, allowing more flexibiliy to the therapist by not requiring a computer.</p>
                            <h1>Preview</h1>
                            <img src={sphere} style={{ width: "100%" }} />
                            <h1>Concept</h1>
                            <p>The idea is to have the patient at the center of a sphere with light points all around.</p>
                            <p>  The therapist can then make the sphere spin in both axis, and adjust the speed with a controller.</p>
                            <p>Using a cable / wifi, it can be mirrored on a laptop or a phone, to see what the patient see inside the headset</p>


                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default Optokinetic;
