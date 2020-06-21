import React from 'react';
import ServiceProvider from '../services/ServiceProvider';

export const GetDependencies = () => ({
  ServiceProvider: ServiceProvider,
});

export const DependencyInjection = React.createContext({});