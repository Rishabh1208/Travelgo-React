import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import Navbar from'./components/Navbar';
import ProductList from'./components/ProductList'; 
import Details from'./components/Details';
import Cart from'./components/cart/Cart';
import Default from'./components/Default';
import Modal from './components/Modal';
import About from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route path="/aboutus" component={About}></Route>
        <Route path="/contactus" component={Contact}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal/>
    </React.Fragment>
  )
}

export default App;
