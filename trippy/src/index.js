import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Nav></Nav>
    <Body></Body>
<Footer></Footer>

  </React.StrictMode>
);

