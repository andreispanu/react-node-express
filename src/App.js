import React, { useState, useEffect } from 'react';
import { DashboardContext } from "./context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Containers
import Navigation from "./containers/Navigation";
import Header from "./containers/Header";
import ContactUs from "./containers/ContactUs";
import Buildings from "./containers/Buildings";

// CSS
import normalizer from "./static/css/normalizer.css";
import app from "./static/css/app.css";
import Map from './components/Map/Map';
import Dashboard from './containers/Dashboard';

function App() {
  const [pulledData, setPulledData] = React.useState({})

  const callAPI = () => {
    fetch("http://localhost:4000/buildings")
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setPulledData(response);
      });
  };

  useEffect(() => {
    callAPI()
  }, []);

  if (pulledData !== {}) {
    return (
      <DashboardContext.Provider value={pulledData}>
        <div className="body-container">
          <Router>
            <div className="navigation-container">
              <Navigation />
            </div>
            <div className="main-container">
              <Header />
              <Switch>
                <Route path="/contact">
                  <ContactUs />
                </Route>
                <Route path="/buildings">
                  <Buildings />
                </Route>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </DashboardContext.Provider>
    );
  }
}

export default App;
