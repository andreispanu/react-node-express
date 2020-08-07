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


function App() {

  const [data, setData] = React.useState([]);

  // const callAPI = () => {
  //   fetch("http://localhost:3000/url")
  //     .then(res => console.log(res))
  //     // .then(res => this.setData(res))
  //     .then()
  // }

  useEffect(() => {
    // callAPI()
  }, []);


  return (
    <DashboardContext.Provider value={data}>

      <Router>
        <Switch>
          <Route path="/contacts">
            <ContactUs />
          </Route>
          <Route path="/hello">
            <p>hello</p>
          </Route>
          <Route path="/">
            <p>dash</p>
            {/* <Dashboard /> */}
          </Route>

        </Switch>
      </Router>
    </DashboardContext.Provider>
  );
}

export default App;
