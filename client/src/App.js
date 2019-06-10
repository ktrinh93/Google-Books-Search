import React, { Component } from "react";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { Container } from "./components/Grid";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Container>
            <Switch>
              <Route exact path="/" component={Search} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/saved" component={Saved} />
              <Route component={Search} />
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
