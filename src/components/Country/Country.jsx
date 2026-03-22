import { useState } from "react";


const Country = ({countryInfo, handleVisitedCountries, handleVisitedFlags}) => {
    const currencyName = Object.values(countryInfo?.currencies?.currencies || {})[0]?.name;

    const [visited, setVisited] = useState(false)

    const handleVisited = () =>{
        // 1. basic system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // 2. Second system
        // setVisited(visited? false : true)

        // 3. third system
        setVisited(!visited)
        handleVisitedCountries(countryInfo)
    }
    
    return (
        <div className={`card ${visited && 'country-visited'}`}>
            <img src={countryInfo.flags.flags.png} alt={countryInfo.flags.flags.alt} />
            <h3>Name: {countryInfo.name.common}</h3>
            <h4>Capital: {countryInfo.capital.capital}</h4>
            <h5>Official Name: {countryInfo.name.official}</h5>
            <p>Continent: {countryInfo.continents.continents}</p>
            <p>Currency: {currencyName}</p>
            <p>Population: {countryInfo.population.population}</p>
            <p>Area: {countryInfo.area.area} • {countryInfo.area.area > 300000 ? 'Large Country' : 'Small Country'}</p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=>{handleVisitedFlags(countryInfo.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;