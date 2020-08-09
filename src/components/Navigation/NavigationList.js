import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import navigationList from "../../static/css/components/navigationList.css";

const NavigationList = (props) => {

  const clickFunc = (item) => {
    props.isClicked(item);
  }

  return (
    <>
      <div className="list-title">
        Menu
      </div>
      <div className="list-container">
        <ul>
          <Link to="/" className="link">
            <li className={props.active === 'dashboard' ? "active" : ""} onClick={() => clickFunc('dashboard')}>
              Dashboard
            </li>
          </Link>
          <Link to="/buildings" className="link">
            <li className={props.active === 'buildings' ? "active" : ""} onClick={() => clickFunc('buildings')}>
              Buildings
            </li>
          </Link>
          <li>Posts</li>
          <li className="badge-container">
            Conversations<span className="badge">2</span>
          </li>
          <li>Amenities</li>
          <li>Tenants</li>
          <li>Performance</li>
          <li>Users</li>
        </ul>
      </div>
    </>
  )
}


NavigationList.propTypes = {
  active: PropTypes.string
};

export default NavigationList;