import "./App.css";


import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsComp from "./components/NewsComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  state = { progress: 0 };
  apikey = process.env.REACT_APP_API_KEY;
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  constructor() {
    super();
    this.State = {
      pageSize: 6,
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="white" height={5} progress={this.state.progress} />
          <Switch>
            <Route exact path="/technology">
              <NewsComp
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="technology"
              />
            </Route>
            <Route exact path="/sports">
              <NewsComp
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/science">
              <NewsComp
                setProgress={this.setProgress}
                key="science"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/health">
              <NewsComp
                setProgress={this.setProgress}
                key="health"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/entertainment">
              <NewsComp
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/business">
              <NewsComp
                setProgress={this.setProgress}
                key="business"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/">
              <NewsComp
                setProgress={this.setProgress}
                key="general"
                pageSize={this.State.pageSize}
                apiKey={this.apikey}
                country="in"
                category="general"
              />
            </Route>
          </Switch>
        </Router>
        {/* The keys for each Router Component is very crucial. Components passed with different keys tells React to mount the component again for updated props. */}
      </div>
    );
  }
}
