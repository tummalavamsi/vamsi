import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Getstarted from './components/Getstarted'
import Form from './components/Form';
import Form2 from './components/Form2';
function App() {
  return (
   <>
    <Router> 
    <Navbar/>

<Switch>

  <Route path='/' exact component=
  {Home}/>
  <Route path='/Getstarted' exact component=
  {Getstarted}/>
   <Route path='/sign-up' exact component=
  {Form}/>
  <Route path='/Login' exact component=
  {Form2}/>
</Switch>

    </Router>
</>
    
  );
}

export default App;
