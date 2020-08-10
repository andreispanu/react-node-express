import React from 'react';
import Map from "../components/Map/Map";
import "../static/css/containers/contacts.css";

const ContactUs = () => {
  return (
    <div className="main">
      <div className="contacts-box">
        <p><span>Contact Us</span></p>
        <p>Business Name</p>
        <p>
          36 Squaw Creek Dr.<br />
          Harleysville, PA 19438
        </p>
      </div>
      <Map id="mapLondonSilver" />
    </div>
  )
}

export default ContactUs;