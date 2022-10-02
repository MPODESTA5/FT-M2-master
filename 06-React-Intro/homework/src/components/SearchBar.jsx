//import { Button } from 'bootstrap';
import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  //return <div>Search Bar Component</div>
return (
    <div>
      <input type='text' placeholder='Ciudad...'></input>
      <button onClick={()=>props.onSearch('Buscando Ciudad')}>Agregar</button>
    </div>
)
};