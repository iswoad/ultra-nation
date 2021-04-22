import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const { countryName } = useParams();
    const [detail, setDetail] = useState({});
    useEffect( () =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data))
    }, [])
    console.log(detail)
    return (
        <div>
            <h1>This is country details</h1>
            <h2>{detail[0].name}</h2>
        </div>
    );
};

export default CountryDetails;