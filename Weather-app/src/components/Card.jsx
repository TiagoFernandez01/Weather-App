import React from 'react';
import style from '../components/Hoja-de-estilos/card.module.css';


export default function Card(props) {
  // acá va tu código
  return (<div className={style.contenedorPrincipal}>
    <button onClick={props.onClose} className={style.btn}>X</button>
    <h3>{props.name}</h3>
    <div className={style.contenedorDatos}>
      <div>
        <p>Min</p>
        <p>{props.min}</p>
      </div>
      <div>
        <p>Max</p>
        <p>{props.max}</p>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img not found" />
    </div>
  </div>
  )
};