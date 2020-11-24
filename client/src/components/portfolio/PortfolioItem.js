import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser"
import imag from "../../img/projectThumbnails/hw2.PNG"
function PortfolioItem(props) {
  // import img from "../../img/projectThumbnails${props.data.thumbnail";
  // let img= require "../../img/projectThumbnails"+${props.data.thumbnail};
  console.log({props});
  let img = "../../img/projectThumbnails"+props.data.thumbnail;
  console.log({img}); 
    return (
        // <div key={props.data.id} className="portfolio-item" style={{backgroundImage:`url(${img})` }} />
<>

<img src={require(img)} />
</>
    );
 }
  
 export default PortfolioItem;