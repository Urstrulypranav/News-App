import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './Component/Header';
import News from './Component/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";;

export class App extends Component {
  static propTypes = {

  }
  render() {
    return (
      <div>
        <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={<News category="general"/>} ></Route>
          <Route exact path="/business" component={<News category="business"/>} ></Route> 
          <Route exact path="/entertainment" component={<News category="entertainment"/>}></Route>
          <Route exact path="/health" component={<News category="health"/>}></Route>
          <Route exact path="/science" component={<News category="science"/>}></Route>
     </Routes>
    </BrowserRouter>
</div>
    )                   
  }
}

export default App

