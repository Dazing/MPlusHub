import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DependencyInjection, GetDependencies } from './contexts/DependencyInjection';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <DependencyInjection.Provider value={GetDependencies()}>
      <App />
    </DependencyInjection.Provider>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();

