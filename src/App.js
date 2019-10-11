import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>This is Contact page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Router>
          <nav>
            <ul>
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
              <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about" component={About}/>

          <Route path="/contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
