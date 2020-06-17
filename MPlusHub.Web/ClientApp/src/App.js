import React, { Component } from 'react';
import { Route } from 'react-router';
import { MasterLayout } from './components/MasterLayout';
import { HomePage } from './pages/HomePage/HomePage';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <MasterLayout>
        <Route exact path='/' component={HomePage} />
      </MasterLayout>
    );
  }
}
