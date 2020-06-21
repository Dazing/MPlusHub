import React from 'react';

import './MasterLayout.scss';
import MainNav from '../../components/MainNav/MainNav';

const MasterLayout = (props) => {
  return ( 
    <div id="app-wrapper">
      <MainNav />

      { props.children }
    </div>
  );
}
 
export default MasterLayout;