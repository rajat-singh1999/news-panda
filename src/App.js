import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';

export default class App extends Component {
  constructor(){
    super()
    this.State = {
      apiKey1: "741d2777a5e84814bfbe8981af6b73bf",
      apiKey2: "b819c0df545740f1b9ef8c4d3ec93a0a",
      pageSize: 5
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <NewsComp pageSize={this.State.pageSize} apiKey={this.State.apiKey1}/>        
      </div>
    )
  }
}
