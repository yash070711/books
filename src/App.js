import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import logo from "./logo.svg"
import './App.css';
import Home from "./Home";
import About from "./About";
import im56 from "./img/2023-Horoscopes-Astrology_Getty-scaled-e1672166946139 (1).webp"
function App() {
  return (
    <div >
       {/* <BrowserRouter>

<Routes>




    <Route path="/" element={<Dashboard />} />
    <Route path="/NewArrivals" element={<NewArrivals/>} />
    <Route path="/Womens" element={<Womens/>} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Myaccount" element={<Myaccount />} />
    <Route path="/Mens" element={<Mens />} />
    <Route path="/Collaboration" element={<Collaboration />} />
    <Route path="/Sport" element={<Sport />} />
    <Route path="/Camp" element={<Camp />} />
    <Route path="/Checkout" element={<Checkout />} />
    
    
  

  

  

</Routes>

</BrowserRouter> */}
<div style={{backgroundImage:`url(${im56})`}}/>
  <Header/>    
 <Home/>
 <About/>
    </div>
  );
}

export default App;
