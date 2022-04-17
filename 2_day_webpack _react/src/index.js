import {add, print} from "./calc";

import React from "react";
import ReactDOM from "react-dom"

import "./index.css"

// const h1 = document.createElement("h1");
// h1.innerHTML = "Welcome to Webpack";
// h1.classList.add("redtext");

const el = React.createElement(
    "p", 
    {className: "redtext"}, 
    "Welcome",
    React.createElement("h1", {}, "Manju")
    
);

ReactDOM.render(
    <div id = "box">
        <h1> Manju</h1>
        <input type = "number"></input>
    </div>,
    document.getElementById("root")
)
