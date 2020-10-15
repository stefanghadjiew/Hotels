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
        <Route exact path="/Hotels" component={Home}/>
        <Route exact path="/Hotels/all" component={Hotels}/>
        <Route exact path="/Hotels/all/:hotelId"  component={Hotel}/>
        <Route exact path="/Hotels/all/:hotelId/rooms" component={Rooms}/> 
        <Route exact path ="/Hotels/all/:hotelId/rooms/:roomId" component={Room}/>
        <Route exact path ="/Hotels/all/:hotelId/rooms/:roomId/book" component={Checkout}/>
        <Route exact path ="/Hotels/successpay" component={SuccessPay}/> 
        <Route exact path ="/Hotels/errorpay" component={ErrorPay}/> 
        <Route component={Error}/> 
      </Switch>
    <Footer/>
  </>
  );
}

export default App;
