import certificateIcon from '../assets/icons/certificateIcon.png'
import preview from '../assets/invoicecli/preview.png'
import clientManagement from '../assets/invoicecli/client_management.mp4'
import invoiceGeneration from '../assets/invoicecli/invoice_generation.mp4'

import React, { useState } from 'react';


function InvoiceCLITool() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={certificateIcon} />
                <p>Invoice CLI Tool</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Invoice CLI Tool</div>
                        <div className="title-bar-controls">
                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">
                        <div className="contentWindowContainer" >
                            <a href="https://github.com/thom-gg/invoice-cli-tool" target="_blank">https://github.com/thom-gg/invoice-cli-tool</a>
                            <h1>Description</h1>
                            <p>I made this CLI tool to generate invoices easily, initially for my own use. It uses a .docx template, and generate both .docx and .pdf files.
                                It's written in JavaScript
                            </p>
                            <img src={preview} style={{ width: "100%" }} />

                            <h1>Client management</h1>
                            <p>You can create / store clients profile (useful for recurring invoices for example)</p>
                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                <video className="demoVideo" controls >
                                    <source src={clientManagement} type="video/mp4" />
                                </video>
                            </div>

                            <h1>Invoice generation</h1>
                            <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
                                <video className="demoVideo" controls >
                                    <source src={invoiceGeneration} type="video/mp4" />
                                </video>
                            </div>

                            <p>⚠️ It suits my needs, not necessarily yours depending on your country, laws, etc...</p>

                            <h1>Dependencies</h1>
                            <p>Uses <a target="_blank" href="https://github.com/open-xml-templating/docxtemplater">https://github.com/open-xml-templating/docxtemplater</a> to edit
                                .docx files, LibreOffice to convert .docx to .pdf (you need libreoffice installed on computer and added to PATH).</p>
                            <p>Also uses <a target="_blank" href="https://github.com/SBoudrias/Inquirer.js">https://github.com/SBoudrias/Inquirer.js</a>,
                                <a target="_blank" href="https://github.com/chalk/chalk">https://github.com/chalk/chalk</a>, <a target="_blank" href="https://github.com/usmanyunusov/nanospinner">https://github.com/usmanyunusov/nanospinner</a> for terminal interactions</p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default InvoiceCLITool;
