import HeroImage from "./HeroImage";

 function AboutLeft() {
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
                <a rel="noreferrer" className="list-group list-group-flush col-12" target="_BLANK" href="./client/public/docs/dionysusResume2020.7b.pdf">Resume (PDF)</a>
            </ul>
        </div>
    </div>
    );
 }
 
 export default AboutLeft;