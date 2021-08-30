import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(){
    super()
    this.State = {
      apiKey1: "741d2777a5e84814bfbe8981af6b73bf",
      apiKey2: "b819c0df545740f1b9ef8c4d3ec93a0a",
      pageSize: 6
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/technology"><NewsComp key="technology" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="technology"/></Route>
          <Route exact path="/sports"><NewsComp key="sports" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="sports"/></Route>
          <Route exact path="/science"><NewsComp key="science" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="science"/></Route>
          <Route exact path="/health"><NewsComp key="health" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="health"/></Route>
          <Route exact path="/entertainment"><NewsComp  key="entertainment"pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="entertainment"/></Route>
          <Route exact path="/business"><NewsComp key="business" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="business"/></Route>
          <Route exact path="/"><NewsComp key="general" pageSize={this.State.pageSize} apiKey={this.State.apiKey1} country="in" category="general"/></Route>
        </Switch>      
        </Router>
        {/* The keys for each Router Component is very crucial. Components passed with different keys tells React to mount the component again for updated props. */}
      </div>
    )
  }
}
