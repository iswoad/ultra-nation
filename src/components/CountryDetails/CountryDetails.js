import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect( () =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [])
    const { name,capital } = detail[0];
    return (
        <div>
            <h1>This is country details</h1>
            <h2>{name}</h2>
            <p>{capital}</p>
        </div>
    );
};

export default CountryDetails;