import React, { useContext, useState, useEffect } from 'react';
import { DependencyInjection } from '../../contexts/DependencyInjection';

const TeamPage = (props) => {
    const [team, setTeam] = useState('');
    const serviceProvider = useContext(DependencyInjection);

    const getTeam = () => serviceProvider.HttpService.Request('GET', '/api/mplusteam').then(_ => setTeam(_));
    return ( 
        <div>
            HomePage
            <button onClick={getTeam}>Get Team!</button>
            <p>
                {team}
            </p>
        </div>
     );
}
 
export default TeamPage;