import CodePortfolio from "./portfolio/CodePortfolio"
import AboutRight from "./AboutRight";
import {getCodePage} from "../utils/API"
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser"
function CodeDisplay() {

    const [about, setAbout] = useState({title:"Loading...", about:"Sorry, still trying to load"});

    useEffect(()=>{   
        getCodePage()
        .then(res=>{
            if(res){
                setAbout(res.data[0]);
            }
        }); 

    },[]);
 

    return (
        <div className="row" id="main">
        <AboutRight title={about.title} aboutText={ReactHtmlParser(about.about)}/>
            <CodePortfolio title={about.title} aboutText={ReactHtmlParser(about.about)}/>
        </div>
   );
 }
 
 export default CodeDisplay;