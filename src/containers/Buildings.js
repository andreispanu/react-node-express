import React from 'react';
import BuildingsList from '../components/BuildingsList/BuildingsList';
import Map from "../components/Map/Map";
// CSS
import "../static/css/containers/buildings.css";

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