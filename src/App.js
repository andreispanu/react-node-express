import React, { useEffect } from 'react';
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
// SVG
import { ReactComponent as MenuBar } from "./static/svg/menuBar.svg";

// CSS
import "./static/css/normalizer.css";
import "./static/css/app.css";
import Dashboard from './containers/Dashboard';

function App() {
  const [pulledData, setPulledData] = React.useState({});
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Mobile Nav
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  };

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
        <div className={drawerOpen === true ? "body-container visible" : "body-container"}>
          <Router>
            <div className="menuBurgerBar">
              <span>
                <MenuBar onClick={toggleDrawer} />
              </span>
            </div>
            <div className="navi-container">
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
