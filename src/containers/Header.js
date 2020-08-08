import React from 'react';
import header from '../static/css/containers/header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="options-left">
        options
    </div>
      <div className="options-right-container">
        <div className="search-container">
          search
      </div>
        <div className="language-selector-container">
          language selector
        </div>
      </div>
    </div>
  )
}

export default Header;