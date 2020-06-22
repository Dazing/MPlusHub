import React, { FunctionComponent } from 'react';

import './MasterLayout.scss';
import { MainHeader } from '../../components/MainHeader/MainHeader';

export interface IMasterLayout {
};

const MasterLayout: FunctionComponent<IMasterLayout> = (props) => {
  return ( 
    <div id="app-wrapper">
      <MainHeader />

      { props.children }
    </div>
  );
}
 
export default MasterLayout;