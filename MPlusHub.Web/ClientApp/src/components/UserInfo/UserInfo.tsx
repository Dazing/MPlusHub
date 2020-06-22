import React, { FunctionComponent } from 'react';
import './UserInfo.scss';


export interface IUserInfo {

}

export const UserInfo: FunctionComponent<IUserInfo> = ({ }) => {
  return (
    <div id="app-user-info"></div>
  );
}
