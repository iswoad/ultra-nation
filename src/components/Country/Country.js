import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    // console.log(props);
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height:'50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px', borderRadius: '20px'}
    return (
        <div style={countryStyle}>
            <h1>This is {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <button onClick= {() => handleAddCountry(props.country) }>Add Country</button>
            <Link to = {`/name/${name}`}> Show details of {name}</Link>
        </div>
    );
};

export default Country;