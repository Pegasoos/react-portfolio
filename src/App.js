import './App.css';
import React from 'react';
import NavBar from "./components/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';

function App() {
  return (
    <div className="App">
   <Switch>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/contact' component = {Contact}/>
      <Route path = '/portfolio' component  = {Portfolio}/>
   </Switch>
   <NavBar />
    </div>
  );
}

export default App;
