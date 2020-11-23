import AboutLeft from "./AboutLeft"
import AboutRight from "./AboutRight";
import {getAboutPageInfo} from "../utils/API"
import React, { useState, useEffect } from "react";
function MainDisplay() {

    const [about, setAbout] = useState({});

    useEffect(()=>{
        setAbout(getAboutPageInfo());
        
    },[]);

    return (
    <div className="row" id="main">
        <AboutLeft />
        <AboutRight title={about.title} aboutText={about.text}/>
    </div>
   );
 }
 
 export default MainDisplay;