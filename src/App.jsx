import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Facrev from './components/Facrev';

import './App.css';

const App = () => {
  return (
    // <Switch>
    //   <Route exact path="/" component={Hero} />
    //   {/*  */}
    // </Switch>

    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' Component={Hero}/>
        <Route path="/facrev" Component={Facrev} />
      {/* <Route path="/carpool" Component={Carpool} />
      <Route path="/questionpapers" Component={Questionpapers} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
