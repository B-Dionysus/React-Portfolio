import Portfolio from "./portfolio/Portfolio"
import MainTextContent from "./MainTextContent";
import {getCodePage} from "../utils/API"
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser"
function CodeDisplay() {
    
    // This component displays the title of the page and some basic intro text. Those are both
    // stored in the state variable here, and loaded via an API call to the database in userEffect, below
    const [about, setAbout] = useState({title:"Loading...", about:"Loading..."});
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
        <MainTextContent title={about.title} aboutText={ReactHtmlParser(about.about)}/>
            <Portfolio cat="2" title={about.title} aboutText={ReactHtmlParser(about.about)}/>
        </div>
   );
 }
 
 export default CodeDisplay;