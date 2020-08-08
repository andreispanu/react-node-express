import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/Context';
import Paper from '@material-ui/core/Paper';
import BuildingsList from '../components/BuildingsList/BuildingsList';
import Map from "../components/Map/Map";
// CSS
import buildings from "../static/css/containers/buildings.css";
// SVG
import { ReactComponent as Suitcase } from "../static/svg/suitcase.svg";
import { ReactComponent as User } from "../static/svg/user.svg";


const Buildings = () => {

  return (
    <React.Fragment>
      <div className="buildings-container">
        <div className="building-list">
          <BuildingsList />
        </div>
        <div className="building-map">
          <Map id="londonMapSilver" />
        </div>
      </div>
    </React.Fragment>
  )

}

export default Buildings;