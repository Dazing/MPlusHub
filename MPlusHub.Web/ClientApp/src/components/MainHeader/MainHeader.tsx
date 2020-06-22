import React, { FunctionComponent } from 'react';
import MainNav from '../MainNav/MainNav';
import { UserInfo } from '../UserInfo/UserInfo';
import { AppLogo } from '../AppLogo/AppLogo';
import './MainHeader.scss';


export interface IMainHeader {

};

export const MainHeader: FunctionComponent<IMainHeader> = ({})=> {
  return ( 
    <div id="app-main-header">
      <AppLogo />
      <MainNav />
      <UserInfo />
    </div>
  );
}