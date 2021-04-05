import React from 'react';

const Country = (props) => {
    console.log(props.country);
    const {name, population, region, flag} = props.country;
    const flagStyle = {height:'50px'}
    return (
        <div>
            <h1>This is {name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Population: {population} </p>
            <p>Region: {region} </p>
        </div>
    );
};

export default Country;