import React from 'react';
import { Switch,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Hotels from './Hotels';
import Hotel from './Hotel';
import Rooms from './Rooms';

/* import Rooms from "./Rooms";
import Room from "./Room";
import Error from "./Error";  */

function App() {
  return (
  <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/hotels" component={Hotels}/>
        <Route exact path="/hotels/:hotelId"  component={Hotel}/>
        <Route exact path="/hotels/:hotelId/rooms" component={Rooms}/> 
              {/* <Route exact path ="/rooms/:roomId" component={Room}/>
              <Route component={Error}/>  */} 
        </Switch>
  </>
  );
}

export default App;
