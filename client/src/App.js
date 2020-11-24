import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainDisplay from "./components/MainDisplay"
import CodeDisplay from "./components/CodeDisplay"
import MusicDisplay from "./components/MusicDisplay"
import { Link } from "react-router-dom";
function App() {
  
  return (  
    <div className="container">
     <Router>
        <div className="row" id="tabs">
            <div className="col currentTab projectTabs"><Link to="/">Main</Link></div>
            <div className="col menuTab projectTabs" ><Link  to="/coding">Code</Link></div>
            <div className="col lastTab projectTabs"><Link to="/music">Music</Link></div>
        </div>
          <Route exact path="/" component={MainDisplay} />
          <Route exact path="/coding" component={CodeDisplay} />
          <Route exact path="/music" component={MusicDisplay} />
        </Router>
    </div>
  );  
}

export default App;
