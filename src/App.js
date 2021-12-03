import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstarted from './components/Getstarted'
import A2 from './components/A2';

import A4 from './components/A4';
import A1 from './components/A1';
import A3 from './components/A3';


function App() {
  return (
   <>
    <Router> 
  

<Switch>

  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstarted' exact component=
  {Getstarted}/>
   <Route path='/sign-up' />
  <Route path='/Login'/>
   <Route path='/A4' exact component=
  {A4}/>
     <Route path='/A1' exact component=
  {A1}/>
      <Route path='/A2' exact component=
  {A2}/>
  <Route path='/A3' exact component=
  {A3}/>
  
     
 

 
  

</Switch>

    </Router>
</>
    
  );
}

export default App;
