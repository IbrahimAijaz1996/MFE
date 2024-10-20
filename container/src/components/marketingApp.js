import React, {useRef, useEffect} from "react";
import {mount} from "marketing/MarketingIndex";
import {useHistory} from "react-router-dom"

export default ()=>{
    let ref = useRef(null);
    let history = useHistory();
    useEffect(()=>{
        let {onParentNavigate} = mount(ref.current, {
            onNavigate: ({pathname: nextPathname}) => {
                let {pathname} = history.location;
                if(pathname !== nextPathname){
                    history.push(nextPathname);
                }
            }
        });
        history.listen(onParentNavigate);
    }, []);
    return <div ref={ref} />;
}