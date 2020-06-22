import React from 'react';
import { ServiceProvider } from '../services/ServiceProvider';

export const DependencyInjection = React.createContext<ServiceProvider>({} as ServiceProvider);