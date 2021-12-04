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
import Loginpage from './components/pages/Loginpage'
import Sighnuppage from './components/pages/Sighnuppage'
import M1 from './components/M1';
import M2 from './components/M2';
import M3 from './components/M3';
import M4 from './components/M4';
import S1 from './components/S1';
import S2 from './components/S2';
import S3 from './components/S3';
import S4 from './components/S4';
import B1 from './components/B1';
import B2 from './components/B2';
import B3 from './components/B3';
import B4 from './components/B4';

function App() {
  return (
   <>
    <Router> 
  

<Switch>

  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstarted' exact component=
  {Getstarted}/>
   <Route path='/sign-up' exact component={Sighnuppage}/>
  <Route path='/login' exact component={Loginpage}/>

   <Route path='/A4' exact component=
  {A4}/>
     <Route path='/A1' exact component=
  {A1}/>
      <Route path='/A2' exact component=
  {A2}/>
  <Route path='/A3' exact component=
  {A3}/>
   <Route path='/M1' exact component=
  {M1}/>
   <Route path='/M2' exact component=
  {M2}/>
  <Route path='/M3' exact component=
  {M3}/>
  <Route path='/M4' exact component=
  {M4}/>
  <Route path='/S1' exact component=
  {S1}/>
  <Route path='/S2' exact component=
  {S2}/>
  <Route path='/S3' exact component=
  {S3}/>
  <Route path='/S4' exact component=
  {S4}/>
  <Route path='/B1' exact component=
  {B1}/>
  <Route path='/B2' exact component=
  {B2}/>

  <Route path='/B3' exact component=
  {B3}/>
   <Route path='/B4' exact component=
  {B4}/>
  
  
</Switch>

    </Router>
</>
    
  );
}

export default App;
