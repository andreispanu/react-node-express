import React, { useState } from 'react';
import NavigationList from "../components/Navigation/NavigationList.js";
import SupportList from "../components/Navigation/SupportList.js";

// SVG
import BuildingsIcon from "../static/svg/buildingsIcon";
// CSS
import navigation from "../static/css/navigation.css";

const Navigation = () => {

  const [isActive, setIsActive] = useState('buildings');

  const activeCheck = (linkName) => {
    setIsActive(linkName)
  }

  return (
    <React.Fragment>
      <div className="navigation-container">
        <div className="navigation-header-container">
          <div className="navigation-header">
            <BuildingsIcon /> <span>Buildings</span>
          </div>
        </div>
        <div className="navigation-menu">
          <NavigationList active={isActive} isClicked={item => activeCheck(item)} />
        </div>
        <div className="navigation-separator-container">
          <div className="navigation-separator" />
        </div>
        <div className="navigation-support">
          <SupportList active={isActive} isClicked={item => activeCheck(item)} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Navigation;