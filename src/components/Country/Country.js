import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle = {height:'50px'}
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'}
    return (
        <div style={countryStyle}>
            <h1>This is {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
            <button onClick= {() => handleAddCountry(props.country) }>Add Country</button>
        </div>
    );
};

export default Country;