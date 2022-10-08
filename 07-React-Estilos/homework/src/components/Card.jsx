import React from 'react';
import s from './card.module.css'

export default function Card(props) {
  // acá va tu código
  //return <div>Card Component</div>
  
  return (
    <div className={s.principal}>
      <button className={s.btn} onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div className={s.middlediv}>
        <div>
          <h4>Min</h4>
          <p>{props.min}</p>
        </div>
        <div> 
          <h4>Max</h4>
          <p>{props.max}</p>
        </div>
        <div>
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Ilustración del clima'/>
        </div>
      </div>
    </div>
  )
          
};