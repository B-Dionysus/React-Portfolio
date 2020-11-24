import AboutRight from "./AboutRight";
import {getAboutPageInfo} from "../utils/API"
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser"
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
        <AboutRight title={about.title} aboutText={ReactHtmlParser(about.about)}/>
    </div>
   );
 }
 
 export default MainDisplay;