//import { Button } from 'bootstrap';
import React from 'react';
import s from './search.module.css'

export default function SearchBar(props) {
  // acá va tu código
  //return <div>Search Bar Component</div>
return (
    <div className={s.principal}>
      <input type='text' placeholder='Ciudad...'></input>
      <button onClick={()=>props.onSearch('Buscando Ciudad')} className={s.btn}>Agregar</button>
    </div>
)
};