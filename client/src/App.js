import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainDisplay from "./components/MainDisplay"
function App() {
  
  return (  
    <div className="container">
        <div className="row" id="tabs">
            <div className="col currentTab projectTabs">Main</div>
            <div className="col menuTab projectTabs" >Code</div>
            <div className="col lastTab projectTabs">Music</div>
        </div>
          <MainDisplay />
    </div>
  );  
}

export default App;
