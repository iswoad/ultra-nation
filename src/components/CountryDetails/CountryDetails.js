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
<<<<<<< HEAD
    }, [])
    console.log(detail)
=======
    }, []);

    // It takes some time to load the country detaul from useEffects
    // That's called Asynchronous task
    // When it gets loaded then we can show the name
    // So we check whether the `detail` array has any element in it
    // so detail.length gives >= 0, 0 means no data is added so we can't see any
    // Whenerver the data is loaded in details, means the HTTP request in useEffect completes,
    // This condition becomes true, and data gets rendered.
    // This is called Reactivity, hence we have ReactJS
    const { name,capital } = detail.length && detail[0];
>>>>>>> ef23e87beebf76dd73efefafb83c449cb6052ac8
    return (
        <div>
            <h1>This is country details</h1>
            <h2>{detail[0].name}</h2>
        </div>
    );
};

export default CountryDetails;