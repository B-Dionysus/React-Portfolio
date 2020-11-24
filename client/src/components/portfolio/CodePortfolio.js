import {getPortfolio} from "../../utils/API"
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem"
import ReactHtmlParser from "react-html-parser"
function CodePortfolio() {

    const [portfolio, setPort] = useState([{thumbnail:"/hw2.PNG"}]);

    useEffect(()=>{   
        getPortfolio(2)
        .then(res=>{
            if(res){
                console.log({res});
                setPort(res.data);
                console.log(portfolio);
            }
        }); 

    },[]);
 console.log(portfolio);

    return (
        <div className="row">
        {portfolio.map(elem=>(
                <PortfolioItem data={elem} />
            )
          )}
        </div>
   );
 }
 
 export default CodePortfolio;