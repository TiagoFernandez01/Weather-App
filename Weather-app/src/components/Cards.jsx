import React from 'react';
import Card from './Card.jsx';
import style from '../components/Hoja-de-estilos/cards.module.css';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className={style.contendorPrincipal}>
        {cities.map(c => <Card
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
