import AboutLeft from "./main/AboutLeft"
import MainTextContent from "./MainTextContent";
import {getAboutPageInfo} from "../utils/API"
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser"
function MainDisplay() {

    // This component displays the title of the page and some basic intro text. Those are both
    // stored in the state variable here, and loaded via an API call to the database in userEffect, below
    const [about, setAbout] = useState({title:"Loading...", about:"Loading..."});

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
            <MainTextContent title={about.title} aboutText={ReactHtmlParser(about.about)}/>
        </div>
    </div>
   );
 }
 
 export default MainDisplay;