import React, { FunctionComponent, useContext } from 'react';
import { DependencyInjection } from '../../contexts/DependencyInjection';
import './UserInfo.scss';


export interface IUserInfo {

}

export const UserInfo: FunctionComponent<IUserInfo> = ({ }) => {
  const redirectUrl = `${window.location.origin}${window.location.pathname}`;
  const serviceProvider = useContext(DependencyInjection);

  const onSignInClick = async () => {
    await serviceProvider.AuthService?.Login()
  };

  const onRegisterClick = async () => {
    window.location.replace(`${window.location.origin}/auth/register?redirectUrl=${redirectUrl}`);
  }

  return (
    <div id="app-user-info">

      <div
        role="button"
        onClick={onRegisterClick}
        className="app-auth-button"
      >
        Register
      </div>
      <div
        role="button"
        onClick={onSignInClick}
        className="app-auth-button"
      >
        Sign in
      </div>

    </div>
  );
}
