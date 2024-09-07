import chartIcon from '../assets/icons/chartIcon.png'
import graphPreview from '../assets/tensorflowbenchmark/graph_preview.png'
import React, { useState } from 'react';


function TensorflowBenchmarkTool() {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div className="iconDiv" onClick={() => setOpened(true)}>
                <img src={chartIcon} />
                <p>Tensorflow layers benchmark</p>
            </div>
            <div style={{ background: "rgb(0 0 0 / 60%)", position: "absolute", top: "0", left: "0", width: "100vw", height: "96vh", display: opened ? "block" : "none" }}>
                <div className="window contentWindow" style={{ display: "block" }}>
                    <div className="title-bar">
                        <div className="title-bar-text" >Tensorflow hidden layers benchmark tool</div>
                        <div className="title-bar-controls">
                            <button style={{ cursor: "pointer" }} aria-label="Close" onClick={() => setOpened(false)}></button>
                        </div>
                    </div>
                    <div className="window-body contentWindowBody">
                        <div className="contentWindowContainer" >
                            <a target="_blank" href="https://github.com/thom-gg/benchmark-tensorflow">https://github.com/thom-gg/benchmark-tensorflow</a>
                            <h1>Description</h1>
                            <p>I wrote this little tool in Python when I was discovering TensorFlow, to try different configurations of Machine-learning models, to see what parameters can improve the most the accuracy of the model.
                                I think playing with configurations can help getting a better understanding of these models.</p>

                            <img src={graphPreview} style={{ width: "100%" }} />
                            <p>The model uses the well-known MNIST dataset (hand written digits <a target="_blank" href="https://yann.lecun.com/exdb/mnist/">https://yann.lecun.com/exdb/mnist/</a>).</p>
                            <p>I used the matplotlib library to display the data in a bar chart</p>
                            <h1>Usage</h1>
                            <p>If you want to try it yourself, all the information needed is on the README of the repository: </p>
                            <p><a target="_blank" href="https://github.com/thom-gg/benchmark-tensorflow">https://github.com/thom-gg/benchmark-tensorflow</a></p>
                        </div>
                    </div>
                </div >
            </div>
        </>


    );
}

export default TensorflowBenchmarkTool;
