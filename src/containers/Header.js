import React from 'react';
import header from '../static/css/containers/header.css';
import BuildingsDropdown from "../components/Header/BuildingsDropdown";
import LanguageDropdown from "../components/Header/LanguageDropdown";
import Search from "../components/Header/Search";
// CSS
import headerStyles from "../static/css/components/header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="options-left">
        <BuildingsDropdown />
      </div>
      <div className="options-right-container">
        <div className="search-container">
          <Search />
        </div>
        <div className="divider" />
        <div className="language-selector-container">
          <LanguageDropdown />
        </div>
      </div>
    </div>
  )
}

export default Header;