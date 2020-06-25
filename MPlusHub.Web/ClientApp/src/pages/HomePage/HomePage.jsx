import React, { useContext } from 'react';
import { DependencyInjection } from '../../contexts/DependencyInjection';

const HomePage = (props) => {
    const serviceProvider = useContext(DependencyInjection);

    return ( 
        <div>
            HomePage
        </div>
     );
}
 
export default HomePage;