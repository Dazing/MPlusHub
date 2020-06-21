import React, { useContext } from 'react';
import { Route } from 'react-router';
import MasterLayout from './layouts/MasterLayout/MasterLayout';
import HomePage from './pages/HomePage/HomePage';
import './App.scss'
import { DependencyInjection } from './contexts/DependencyInjection';

const App = () => {
  const dependencyInjection = useContext(DependencyInjection);

  const apiManager = dependencyInjection.ServiceProvider.ApiManager;
  apiManager.User.GetMe();

  return (
    <MasterLayout>
      <Route exact path='/' component={HomePage} />
    </MasterLayout>
  );
}

export default App;