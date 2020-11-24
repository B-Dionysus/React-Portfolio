import AboutLeft from "./AboutLeft"
import AboutRight from "./AboutRight";
import {getAboutPageInfo} from "../utils/API"
import React, { useState, useEffect } from "react";
function MainDisplay() {

    const [about, setAbout] = useState({title:"Loading...", about:"Sorry, still trying to load"});

    useEffect(()=>{   
        getAboutPageInfo()
        .then(res=>{
            if(res){
                console.log({res});
                setAbout(res.data[0]);
            }
        }); 

    },[]);
 

    return (
    <div className="row" id="main">
        <AboutLeft />
        <AboutRight title={about.title} aboutText={about.aboutc}/>
    </div>
   );
 }
 
 export default MainDisplay;