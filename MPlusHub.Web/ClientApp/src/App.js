import React from 'react';
import { Route } from 'react-router';
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/HomePage/HomePage';
import { DependencyInjection } from './contexts/DependencyInjection';

import './App.css'

const App = () => {

  return (
    <MasterLayout>
      <DependencyInjection.Provider>
        <Route exact path='/' component={HomePage} />
      </DependencyInjection.Provider>
    </MasterLayout>
  );
}

export default App;