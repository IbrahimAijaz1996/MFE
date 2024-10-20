import React from "react";
import ReactDOM from "react-dom";
import {createMemoryHistory, createBrowserHistory} from "history"; 
import App from "./app"

const mount = (node, {onNavigate, defaultHistory}) => {
    let history = defaultHistory || createMemoryHistory();
    if(onNavigate) history.listen(onNavigate);
    ReactDOM.render(<App history={history} />, node);

    return {
        onParentNavigate: ({pathname: nextPathname})=>{
            const {pathname} = history.location;
            if(pathname !== nextPathname){
                history.push(nextPathname)
            }
        }
    }
}

if(process.env.NODE_ENV === "development"){
    let remoteNode = document.querySelector("#remote-node");
    if(remoteNode){
        mount(remoteNode , {defaultHistory: createBrowserHistory() });
    }
}

export {mount};