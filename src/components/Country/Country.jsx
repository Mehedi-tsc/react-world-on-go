import React, { useState } from 'react';
import './Country.css';


const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // const [visited, setVisited] = useState('Not Visited');
    // const handleClicked =() =>{
    //    if(visited==='Not Visited'){
    //     setVisited('Visited')
    //    }
    //    else{
    //     setVisited('Not Visited');
    //    }
    const [visited, setVisited] = useState(false);
    const handleClicked =()=>{
        // setVisited(visited?false:true);
        setVisited(!visited);
        handleVisitedCountries(country);
    
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
                <h3>Name: {country.name.common} </h3>
                <h5>Capital: {country.capital.capital} </h5>
                <h5>Continents: {country.continents.continents} </h5>
                <p>Area: {country.area.area} {country.area.area>300000?'Big Country':'Small Country'} </p>
                {/* <button onClick={handleClicked}>{visited}</button> */}
                <button onClick={handleClicked}>
                    {visited ? 'Visited' : 'Not Visited'}
                    </button>
                <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>Add to visited flag</button>
        </div>
    );
};

export default Country;