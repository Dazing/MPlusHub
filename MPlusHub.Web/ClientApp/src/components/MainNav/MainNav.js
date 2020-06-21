import React from 'react';
import { Link } from 'react-router-dom';

import './MainNav.scss';
import UserInfo from '../UserInfo/UserInfo';

const Links = (props) => (
  <div id="app-nav-links">
    <Link></Link>
    <Link></Link>
    <Link></Link>
    <Link></Link>
  </div>
)

const MainNav = (props) => {
  return ( 
    <div id="app-main-nav">
      <div id="app-logo"></div>
      <div id="app-nav-links"></div>
      <UserInfo />
    </div>
  );
}
 
export default MainNav;