import "./App.css";
import React, {useState} from "react";
import Navbar from "./components/Navbar";
import NewsComp from "./components/NewsComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = ()=>{

    const [state, setState] = useState({ progress: 0, pageSize: 6});
    const apikey = process.env.REACT_APP_API_KEY;
    const setProgress = (progress) => {
      setState({ progress: progress });
    };
  
  
      return (
        <div>
          <Router>
            <Navbar />
            <LoadingBar color="white" height={5} progress={state.progress} />
            <Switch>
              <Route exact path="/technology">
                <NewsComp
                  setProgress={setProgress}
                  key="technology"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="technology"
                />
              </Route>
              <Route exact path="/sports">
                <NewsComp
                  setProgress={setProgress}
                  key="sports"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="sports"
                />
              </Route>
              <Route exact path="/science">
                <NewsComp
                  setProgress={setProgress}
                  key="science"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="science"
                />
              </Route>
              <Route exact path="/health">
                <NewsComp
                  setProgress={setProgress}
                  key="health"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="health"
                />
              </Route>
              <Route exact path="/entertainment">
                <NewsComp
                  setProgress={setProgress}
                  key="entertainment"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="entertainment"
                />
              </Route>
              <Route exact path="/business">
                <NewsComp
                  setProgress={setProgress}
                  key="business"
                  pageSize={state.pageSize}
                  apiKey={apikey}
                  country="in"
                  category="business"
                />
              </Route>
              <Route exact path="/">
                <NewsComp
                  setProgress={setProgress}
                  key="general"
                  pageSize={state.pageSize}
                  apiKey={apikey}
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

export default App
