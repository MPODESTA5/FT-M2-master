import React from 'react';
import Card from './Card';
import ss from './cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  //return <div>Cards Component</div>
  return(
    <div className={ss.principal}>
      {
       props.cities.map(p => <Card 
                       key={p.id}
                       name={p.name}
                       min={p.main.temp_min} 
                       max={p.main.temp_max} 
                       img={p.weather[0].icon} 
                       onClose={() => alert(p.name)}
                       />)
      }
    </div>
  )
};