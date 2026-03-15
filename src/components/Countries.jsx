import React, { use, useState } from 'react';
import Country from './Country/Country';
import './Countries/Countries.css'


const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] =useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedCountries =(country)=>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }
    const handleVisitedFlags =(flags) =>{
        const newVisitedFlags = [...visitedFlags,flags];
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h4>Visited Country: {visitedCountries.length} </h4>
            <h4>Visited Countries flag:{visitedFlags.length} </h4>
             <ol>
                {
                visitedCountries.map(country=> <li >{country.name.common}</li>)
                }
            </ol>
            <ul className='flags-container'>
                {visitedFlags.map((flag, index) =><img key={index} src={flag} alt="" />)}
            </ul>
            <div className='countries'>
                  {
                countries.map(country => <Country 
                key ={country.cca3.cca3}
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
                ></Country>)
                 }
            </div>
        </div>
    );
};

export default Countries;