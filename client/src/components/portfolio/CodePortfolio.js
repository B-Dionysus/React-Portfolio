import {getPortfolio} from "../../utils/API"
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem"
function CodePortfolio() {

    const [portfolio, setPort] = useState([{thumbnail:""}]);

    useEffect(()=>{   
        getPortfolio(2)
        .then(res=>{
            if(res){
                setPort(res.data);
            }
        }); 

    },[]);

    return (
        <div className="row portfolio-item-list">
        {portfolio.map(elem=>(
                <PortfolioItem key={elem.id} data={elem} />
            )
          )}
        </div>
   );
 }
 
 export default CodePortfolio;