import React from "react";
import "./index.css";

function Preload(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-hide"}></div>
  );
}

export default Preload;