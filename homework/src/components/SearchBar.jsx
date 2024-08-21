import React, { useState } from "react";
import style from '../components/Hoja-de-estilos/search.module.css';


export default function SearchBar({onSearch}) {

 const [city , setCity] = useState('')

  return (
    <form className={style.contenedorPrincipal} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      {/* <input className={style.btn} type="submit" value="Agregar" /> */}
      <button className={style.btn} type="submit">Agregar</button>
    </form>
  );
}
