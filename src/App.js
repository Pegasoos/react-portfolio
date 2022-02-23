import './App.css';
import React from 'react';
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';

import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div className="App">
   <Routes>
      <Route exact path = '/' element = {<Home/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/portfolio' element  = {<Portfolio/>}/>
   </Routes>
   <NavBar/>
    <Footer/>
    </div>
  );
}

export default App;
