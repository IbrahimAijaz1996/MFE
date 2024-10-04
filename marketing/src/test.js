import React from "react";
import ReactDOM from "react-dom";

import App from "./app"

const mount = (node) => {
    ReactDOM.render(<App />, node);
}

if(process.env.NODE_ENV === "development"){
    let remoteNode = document.querySelector("#remote-node");
    if(remoteNode){
        mount(remoteNode);
    }
}

export {mount};