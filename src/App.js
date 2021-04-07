import React, {useEffect, useState} from 'react';
import './App.css';
import Country from './components/Country/Country';
import Cart from './components/cart/Cart';

function App() {
  const [countries, setCountries]= useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    const newCart = [... cart, country];
    setCart(newCart);
  }
  return (
    <div className="App">
      <h1>Countries Loaded:{countries.length}</h1>
      <h2>Countries Added: {cart.length} </h2>
      <Cart cart={cart}></Cart>

        {
          countries.map( country => <Country country={country} handleAddCountry = {handleAddCountry} key={country.alpha2Code} ></Country> )
        }
    </div>
  );
}

export default App;
