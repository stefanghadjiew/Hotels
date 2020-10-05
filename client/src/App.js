import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { DatabaseProvider } from "./DatabaseContext"
/* import Rooms from "./Rooms";
import Room from "./Room";
import Error from "./Error";  */



function App() {
  
  return (
  <>
    <DatabaseProvider>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/rooms" component={Rooms}/>
            <Route exact path ="/rooms/:roomId" component={Room}/>
            <Route component={Error}/>  */}
          </Switch>
      </Router>
    </DatabaseProvider>
  </>
  );
}

export default App;
