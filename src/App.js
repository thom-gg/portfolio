import './App.css';
import Filegram from './projectComponents/Filegram.tsx';
import React, { useState, useEffect } from 'react';
import startButton from './assets/image/startButton.png'
import githubIcon from './assets/icons/githubIcon.png'
import Solachess from './projectComponents/Solachess.tsx';
import Optokinetic from './projectComponents/Optokinetic.tsx';
import Swap from './projectComponents/Swap.tsx';
import Vote from './projectComponents/Vote.tsx';
import Infos from './projectComponents/Infos.tsx';
import ResumeBot from './projectComponents/ResumeBot.tsx';
import TensorflowBenchmarkTool from './projectComponents/TensorflowBenchmarkTool.tsx';
import InvoiceCLITool from './projectComponents/InvoiceCLITool.tsx';



function App() {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);


  function loadPage() {

    setLoading(false);


  }


  useEffect(() => {

    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      }
      else {

        clearInterval(interval);
        loadPage();
      }


    }, 10);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [progress]);


  return (
    <>

      {loading ?
        <div id="loadingDiv" style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <span >✨Thom's</span>
          <br />
          <span>portfolio✨</span>
          <progress style={{ marginTop: "4vh" }} id="wXP_progress" max="100" value={progress}></progress>
        </div >





        :


        <div id="pageContainer" style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div id="bodyContainer">
            <Infos />

            <div onClick={() => window.open("https://github.com/thom-gg/", "_blank")} className="iconDiv">
              <img src={githubIcon} />
              <p>Github</p>
            </div>
            <Filegram />
            <Solachess />
            <Swap />
            <Vote />
            <Optokinetic />
            <ResumeBot />
            <TensorflowBenchmarkTool />
            <InvoiceCLITool />






          </div>

          <div id="footer" style={{
            width: "100vw", height: "4vh", display: "flex", flexDirection: "row", alignItems: "center",
            backgroundColor: "#C6C6C6", border: "1px solid white", borderBottom: "1px solid grey", paddingLeft: "1vw"
          }}>
            <button style={{ height: "2.5vh" }}> <img src={startButton} style={{ height: "2vh" }} /></button>

          </div>

        </div >
      }
    </>




  );
}

export default App;
