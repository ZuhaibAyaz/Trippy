import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
      
      <Nav/>
      
      <Routes>
      
        <Route path="/" element={ <Body/> } />
        <Route path="/about"  element={<About/>} />
   
        
      </Routes>

      <Footer/>
    
    </BrowserRouter>









   
    
   
  </React.StrictMode>
);
