import AboutLeft from "./main/AboutLeft"
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
                setAbout(res.data[0]);
            }
        }); 
    },[]);
 

    return (
    <div className="row" id="main">
        <AboutLeft />
        <div className="col-md-8">
            <AboutRight title={about.title} aboutText={ReactHtmlParser(about.about)}/>
        </div>
    </div>
   );
 }
 
 export default MainDisplay;