import React, { useState, useEffect } from 'react';
import { DashboardContext } from "./context/Context";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Containers
import ContactUs from "./containers/ContactUs";
import Dashboard from "./containers/Dashboard";

// CSS
import normalizer from "./static/css/normalizer.css";


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
            <Switch>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      </DashboardContext.Provider>
    );
  }
}

export default App;
