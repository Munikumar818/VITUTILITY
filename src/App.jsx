import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Facrev from './components/Facrev';
import Details from './components/Details';
import Navigation from './components/Navigation';

import './App.css';

const App = () => {
  return (
    // <Switch>
    //   <Route exact path="/" component={Hero} />
    //   {/*  */}
    // </Switch>

    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
        <Route path='/' Component={Hero}/>
        <Route path="/facrev" Component={Facrev} />
      {/* <Route path="/carpool" Component={Carpool} />
      <Route path="/questionpapers" Component={Questionpapers} /> */}
      <Route path="/details/:id" element={
        <Details/>
      }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
