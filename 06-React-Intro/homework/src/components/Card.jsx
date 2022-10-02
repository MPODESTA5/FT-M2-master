import React from 'react';

export default function Card(props) {
  // acá va tu código
  //return <div>Card Component</div>
  
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.name}</h2>
      <div>
         <h4>Min</h4>
         <p>{props.min}</p>
         <h4>Max</h4>
         <p>{props.max}</p>
      </div>
         <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt='Ilustración del clima'/>
    </div>
  )
          
};