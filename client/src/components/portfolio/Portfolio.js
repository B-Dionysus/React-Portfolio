import {getPortfolio} from "../../utils/API"
import React, { useState, useEffect } from "react";
import PortfolioItem from "./PortfolioItem"
export default function Portfolio(props) {

    // This components hold a bunch of links to portfolio pieces. This array is stored in the state "portfolio"
    // and loaded vita useEffect, below.
    const [portfolio, setPort] = useState([{loading:true}]);
    useEffect(()=>{   
        getPortfolio(props.cat)
        .then(res=>{
            if(res){
                setPort(res.data);
            }
        }); 
    },[]);

    // The initial value for the portfolio state is "loading:true", in which case we shouldn't render the portfolio
    // PortfolioItem components yet.
    if(portfolio[0].loading)
    return (
        <div className="row portfolio-item-list">
            
        </div>
    )

    else
    return (
        <div className="row portfolio-item-list">
        {portfolio.map(elem=>(
                <PortfolioItem key={elem.id} data={elem} />
            )
          )}
        </div>
   );
 }
 
  