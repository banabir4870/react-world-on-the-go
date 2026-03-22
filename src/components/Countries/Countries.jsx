import React, { use, useState } from 'react';
import Country from '../Country/Country';;

const Countries = ({ fetchPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const [visitedFlags, setVisitedFlags] = useState([])


    const handleVisitedFlags = (flag) =>{
        console.log('Visited flag btn clicked', flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    }

    const handleVisitedCountries = (country) => {
        console.log('handle visited countries clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(fetchPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Visited: {visitedCountries.length}</h2>
            <h2>Total Visited Flags: {visitedFlags.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className='card-container'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} countryInfo={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;