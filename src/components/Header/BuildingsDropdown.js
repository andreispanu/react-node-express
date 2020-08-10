import React, { useState } from 'react';
import AllBuildingsImage from "../../static/images/allBuildingsImage.png";

const BuildingsDropdown = () => {
  const [value, setValue] = useState('all')

  const handleChange = (event) => {
    return setValue(event.target.value)
  }

  return (
    <div className="buildings-dropdown">
      <img src={AllBuildingsImage} alt="buildings selector" />
      <form>
        <select value={value} onChange={handleChange}>
          <option value="all">All Buildings</option>
          <option value="available">Available</option>
        </select>
      </form>
    </div>
  )
}

export default BuildingsDropdown;