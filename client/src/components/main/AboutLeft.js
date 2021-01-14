import HeroImage from "./HeroImage";
import {useEffect} from "react";
import {getPortfolio} from "../../utils/API"

// This component sits just ot the left of the main text content on the main page, and holds the 
// hero image and my contact information
let resumeLink;
 function AboutLeft() {
    useEffect(()=>{
        getPortfolio(1)
        .then(res=>{
            if(res){
                resumeLink=res.data[2].externalLink;
            }
        });
    },[])


   return (
    <div className="col-12 col-md-4" id="main-left">
        <HeroImage />
        <div className="col-12" id="contact">
            <ul>
                <li className="list-group list-group-flush">Benjamin Dionysus</li>
                <li className="list-group list-group-flush">benjamin@sixbynine.com</li>
                <li className="list-group list-group-flush">773-209-2241</li>
                <a rel="noreferrer" className="list-group list-group-flush col-12" target="_BLANK" href="https://www.linkedin.com/in/benjamin-dionysus-10a638182/">Linked In</a>
                <a rel="noreferrer" className="list-group list-group-flush col-12" target="_BLANK" href="https://github.com/B-Dionysus">Github</a>
                <a rel="noreferrer" className="list-group list-group-flush col-12" target="_BLANK" href={resumeLink}>Resume (PDF)</a>
            </ul>
        </div>
    </div>
    );
 }
 
 export default AboutLeft;