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

  const [pulledData, setPulledData] = React.useState({})

  // const callAPI = () => {
  //   fetch("http://localhost:3000/")
  //     .then(res => setPulledData(res))
  //     .then(console.log(pulledData))
  // }


  function ooIfoundData() {
    return fetch("/")
  }

  const ooIprocessData = async () => {
    const responseData = await ooIfoundData()
    setPulledData(responseData)
  }

  useEffect(() => {
    ooIprocessData()
  }, []);

  const [data, setData] = React.useState({
    buildings: {
      item: [
        {
          id: "1",
          buildingName: "Bauhaus Archive",
          buildingAddress1: "7246 Woodland Rd.",
          buildingAddress2: "Waukesha, WI 53186",
          users: "906",
          offices: "36",
          price: "75"
        },
        {
          id: "2",
          buildingName: "Lotus Temple",
          buildingAddress1: "164 S. Carson Court",
          buildingAddress2: "Newport News, VA 23601",
          users: "876",
          offices: "20",
          price: "65"
        }
      ]
    },
  });

  return (
    <DashboardContext.Provider value={data}>
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
    </DashboardContext.Provider>
  );
}

export default App;
