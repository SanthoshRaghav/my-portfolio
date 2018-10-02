import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import { Provider } from "./context";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <About />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
