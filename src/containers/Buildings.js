import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/Context';
import Paper from '@material-ui/core/Paper';

// CSS
import buildings from "../static/css/buildings.css";
// SVG
import { ReactComponent as Suitcase } from "../static/svg/suitcase.svg";
import { ReactComponent as User } from "../static/svg/user.svg";


const Buildings = () => {
  const data = useContext(DashboardContext);
  const buildingsLoop = () => {

    const result = [];
    const buildings = data.buildings;

    if (data.buildings !== undefined) {
      buildings.item.map(item => {
        let pathToImage = item.image
        result.push(
          <div className="building-item" key={item.id}>
            <div className="building-image">
              <img src={require('../static/images/' + item.id + '.png')} alt={item.id} />
            </div>
            <div className="building-name">
              <p>{item.buildingName}</p>
            </div>
            <div className="building-address">
              <p>{item.buildingAddress1}</p>
              <p>{item.buildingAddress2}</p>
            </div>
            <div className="building-stats">
              <div className="building-users">
                <User /><span>{item.users}</span>
              </div>
              <div className="building-offices">
                <Suitcase /><span>{item.offices} Offices</span>
              </div>
            </div>
            <div className="divider" />
            <div className="building-status">
              <div className="building-status-rent">
                <p>For rent</p>
              </div>
              <div className="building-status-price">
                <p>£{item.price}/sqm</p>
              </div>
            </div>
          </div>
        )
      })
    }
    return result;
  }

  return (
    <React.Fragment>
      <div className="buildings-container">
        {buildingsLoop()}
      </div>
    </React.Fragment>
  )

}

export default Buildings;