import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';
import userEvent from '@testing-library/user-event';

function Header() {
  const [{user}, dispatch]= useDataLayerValue();
  return (
    <div className='header'>
      <div className="header_left">
        <SearchIcon/>
        <input placeholder='Search for Artists, Songs' type="text" />
      </div>
      <div className="header_right">
        <Avatar scr="" alt=""/>
        <h4>lio</h4>
      </div>

    </div>
  )
}

export default Header