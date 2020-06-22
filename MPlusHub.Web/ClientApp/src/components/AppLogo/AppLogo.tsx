import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './AppLogo.scss';

export const AppLogo: FunctionComponent = () => {
  return (
    <Link to="">
      <div id= "app-logo">
        <h3>M+ Hub</h3>
      </div>
    </Link>
  );
}