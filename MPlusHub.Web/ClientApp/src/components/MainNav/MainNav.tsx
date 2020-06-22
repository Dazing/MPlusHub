import React, { FunctionComponent } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { pages } from '../../commons/pages';
import { Page } from '../../models/Page';
import './MainNav.scss';

const isActiveLink = (page: Page) => {
  const view = window.location.pathname.split('/');
  return view[1] === page.path || ((!view[1] || view[1] === '') && page.path === '');
}

interface IAppLink { page: Page, isActive: boolean };
const AppLink: FunctionComponent<IAppLink> = ({ page, isActive }) => (
  <Link to={page.path}>
    <div className={`app-nav-link ${isActive ? 'active' : ''}`}>
      <span>{page.name}</span>
    </div>
  </Link>
)

export interface IMainNav {
};

const MainNav: FunctionComponent<RouteComponentProps<IMainNav>> = ({ history }) => {
  return (
    <div id="app-main-nav">
      {
        pages.map(_ =>
          <AppLink
            key={_.name.toLocaleLowerCase()}
            page={_}
            isActive={isActiveLink(_)}
          />
        )
      }
    </div>
  );
}

export default withRouter(MainNav);