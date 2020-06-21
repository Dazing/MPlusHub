import React from 'react';
import { Link } from 'react-router-dom';

import './MainNav.scss';

const MainNav = (props) => {
  return ( 
    <div id="app-main-nav">
      <div id="app-logo"></div>
      <div id="app-nav-links"></div>
      <div id="app-user-info"></div>
    </div>
  );
}
 
export default MainNav;