import React, { useState } from 'react';


const LanguageDropdown = () => {

  const [value, setValue] = useState('english')

  const handleChange = (event) => {
    return setValue(event.target.value)
  }

  return (
    <form>
      <label>
        <select value={value} onChange={handleChange}>
          <option value="english">EN</option>
          <option value="romanian">ENG</option>
        </select>
      </label>
    </form>
  )

}

export default LanguageDropdown;