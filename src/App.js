import React from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
       
         
         Developed by{" "}
        <a target="_blank" href="https://3d-portfolio-jitzk07.netlify.app/" rel="noreferrer">
          Jitendra Kumar
        </a>{" "}
        
        
      </div>
    </React.Fragment>
  );
}

export default App;
