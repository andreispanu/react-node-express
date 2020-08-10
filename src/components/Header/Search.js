import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from "../../static/svg/search.svg";

const Search = () => {

  const [value, setValue] = useState('');
  const placeholder = 'Type to search...';

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="search">
      <form>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      </form>
      <span>
        <SearchIcon />
      </span>
    </div>
  )

}

export default Search;