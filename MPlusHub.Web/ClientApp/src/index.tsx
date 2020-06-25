import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DependencyInjection } from './contexts/DependencyInjection';
//import registerServiceWorker from './registerServiceWorker';
import { AuthService } from './services/AuthService';
import { HttpService } from './services/HttpService';
import { ServiceProvider } from './services/ServiceProvider';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') || '';
const rootElement = document.getElementById('root');

const serviceProvider = new ServiceProvider();
serviceProvider.HttpService = new HttpService(serviceProvider);
serviceProvider.AuthService = new AuthService(serviceProvider);
serviceProvider.AuthService.EnsureUserManager();

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <DependencyInjection.Provider value={serviceProvider}>
      <App />
    </DependencyInjection.Provider>
  </BrowserRouter>,
  rootElement
);

//registerServiceWorker();

