import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainDisplay from "./components/MainDisplay"
import CodeDisplay from "./components/CodeDisplay"
import MusicDisplay from "./components/MusicDisplay"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [path, setPath] = useState("/");

  useEffect(()=>{
    console.log({path});
    setPath(window.location.pathname);
  }, []);

  console.log(path);
  return (  
    <div className="container">  {/* <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>                                        */}
                      
     <Router>
        <div className="row" id="tabs">
            <div className="col currentTab projectTabs"><Link className={path === "/" ? "nav-link" : "nav-link"} to="/">Main</Link></div>
            <div className="col menuTab projectTabs" ><Link className={path === "/coding" ? "nav-link" : "nav-link"} to="/coding">Code</Link></div>
            <div className="col lastTab projectTabs"><Link className={path === "/music" ? "nav-link" : "nav-link"} to="/music">Music</Link></div>
        </div>
          <Route exact path="/" component={MainDisplay} />
          <Route exact path="/coding" component={CodeDisplay} />
          <Route exact path="/music" component={MusicDisplay} />
        </Router>
    </div>
  );  
}

export default App;
