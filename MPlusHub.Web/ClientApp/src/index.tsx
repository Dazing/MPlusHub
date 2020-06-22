import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DependencyInjection } from './contexts/DependencyInjection';
import { ServiceProvider } from './services/ServiceProvider';
import { HttpService } from './services/HttpService';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const rootElement = document.getElementById('root');

const serviceProvider = new ServiceProvider(
  new HttpService(),
);

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <DependencyInjection.Provider value={serviceProvider}>
      <App />
    </DependencyInjection.Provider>
  </BrowserRouter>,
  rootElement
);

registerServiceWorker();

