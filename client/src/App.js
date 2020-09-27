import React from 'react';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
/* import Rooms from "./Rooms";
import Room from "./Room";
import Error from "./Error";  */


function App() {
  return (
  <>
   
    <Router>
    <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
        {/* <Route exact path="/rooms" component={Rooms}/>
        <Route exact path ="/rooms/:room" component={Room}/>
        <Route component={Error}/>  */}
      </Switch>
    </Router>
  </>
  );
}

export default App;
