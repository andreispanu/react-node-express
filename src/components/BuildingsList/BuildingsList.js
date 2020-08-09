import React, { useState, useContext } from 'react';
import { DashboardContext } from '../../context/Context';

// CSS
import buildingsList from "../../static/css/components/buildingsList.css";
// SVG
import { ReactComponent as Suitcase } from "../../static/svg/suitcase.svg";
import { ReactComponent as User } from "../../static/svg/user.svg";
import { ReactComponent as Row } from "../../static/svg/row.svg";
import { ReactComponent as RowSelected } from "../../static/svg/rowSelected.svg";
import { ReactComponent as Grid } from "../../static/svg/grid.svg";
import { ReactComponent as GridSelected } from "../../static/svg/gridSelected.svg";

const BuildingsList = () => {
  const data = useContext(DashboardContext);
  const [view, setView] = useState('grid');

  const switchView = (clicked) => {
    if (clicked === 'row') {
      return setView('row')
    } else if (clicked === 'grid') {
      return setView('grid')
    }
  }

  // ==== Output No of buildings
  const buildingsCount = () => {
    const result = [];
    data.buildings !== undefined && (
      result.push(
        <p><span className="buildings">{data.buildings.item.length}</span>Buildings</p>
      )
    )
    return result
  }

  // ==== Loop data from db
  const buildingsLoop = () => {
    const result = [];
    const buildings = data.buildings;

    if (data.buildings !== undefined) {
      buildings.item.map(item => {
        let pathToImage = item.image
        result.push(
          <div className="building-item" key={item.id + item.buildingName}>
            <div className="building-image">
              <img src={require('../../static/images/' + item.id + '.png')} alt={item.id} />
            </div>
            <div className="building-details">
              <div className="building-name">
                <p>{item.buildingName}</p>
              </div>
              <div className="building-address">
                <p>{item.buildingAddress1}<br />{item.buildingAddress2}</p>
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
          </div>
        )
      })
    }
    return result;
  }

  return (
    <div className="slider-container">
      <div className="view-options">
        <div className="buildings-count">
          {buildingsCount()}
        </div>
        <div className="switcher">
          <span onClick={() => switchView('row')}>{view === 'row' ? <RowSelected /> : <Row />}</span>
          <div className="separator" />
          <span onClick={() => switchView('grid')}>{view === 'grid' ? <GridSelected /> : <Grid />}</span>
        </div>
      </div>
      <div className={view === 'row' ? "buildings-list row-view" : "buildings-list"}>
        {buildingsLoop()}
      </div>
    </div>
  )

}

export default BuildingsList;