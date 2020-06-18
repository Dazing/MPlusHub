import React from 'react';
import ServiceProvider from '../services/ServiceProvider';

const dependencies = () => ({
  ServiceProvider: ServiceProvider,
});

export const DependencyInjection = () => React.createContext(dependencies);