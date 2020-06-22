import './App.scss';

import React from 'react';
import { Route } from 'react-router';

import MasterLayout from './layouts/MasterLayout/MasterLayout';
import HomePage from './pages/HomePage/HomePage';
import TeamPage from './pages/TeamPage/TeamPage';

const App = () => {
  return (
    <MasterLayout>
      <Route exact path='/' component={HomePage} />
      <Route path='/teams*' component={TeamPage} />
    </MasterLayout>
  );
}

export default App;