import React from 'react';
import { Switch,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Hotels from './Hotels';
import Hotel from './Hotel';
import Rooms from './Rooms';
import Room from "./Room";
import Error from "./Error";
import Footer from './Footer';
import Checkout from './Checkout';
import SuccessPay from './SuccessPay';
import ErrorPay from './ErrorPay';

function App() {
  return (
  <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/hotels" component={Hotels}/>
        <Route exact path="/hotels/:hotelId"  component={Hotel}/>
        <Route exact path="/hotels/:hotelId/rooms" component={Rooms}/> 
        <Route exact path ="/hotels/:hotelId/rooms/:roomId" component={Room}/>
        <Route exact path ="/hotels/:hotelId/rooms/:roomId/book" component={Checkout}/>
        <Route exact path ="/successpay" component={SuccessPay}/> 
        <Route exact path ="/errorpay" component={ErrorPay}/> 
        <Route component={Error}/> 
      </Switch>
    <Footer/>
  </>
  );
}

export default App;
