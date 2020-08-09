import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import navigationList from "../../static/css/components/navigationList.css";

const SupportList = (props) => {

  const clickFunc = () => {
    props.isClicked('contact')
  }

  return (
    <>
      <div className="list-title">
        Support
      </div>
      <div className="list-container">
        <ul>
          <li>Need Help?</li>
          <Link to="/contact" className="link">
            <li className={props.active === 'contact' ? "active" : ""} onClick={() => clickFunc()}>
              Contact Us
            </li>
          </Link>
          <li>Knowledge Base</li>
        </ul>
      </div>
    </>
  )
}

SupportList.propTypes = {
  active: PropTypes.string
};

export default SupportList;