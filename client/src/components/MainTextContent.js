
 function MainTextContent(props) {
   return (
    <div className="col-12 " id="main-right">
        <div className="col-12" id="about">
            <div className="projectTitle">{props.title}</div>
            {props.aboutText}
        </div>    
    </div>
    );
 }
 
 export default MainTextContent; 