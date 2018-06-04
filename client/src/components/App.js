import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';

import AboutMe from './AboutMe';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
       <Navbar />
       <Route exact path='/' component={AboutMe} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
