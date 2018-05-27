import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
       <Navbar />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
