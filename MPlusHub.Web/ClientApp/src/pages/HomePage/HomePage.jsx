import React, { useContext } from 'react';
import { DependencyInjection } from '../../contexts/DependencyInjection';

const HomePage = () => {
    const dependencyInjection = useContext(DependencyInjection);

    dependencyInjection.ServiceProvider.GetHttpService();

    return ( 
        <div>
            HomePage
        </div>
     );
}
 
export default HomePage;