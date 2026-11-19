import React from 'react'
import peliculas from "../navegacion/peliculas.json";

const Peliculas = () => {
  return (
    <div>
      <h2>Peliculas: </h2>
      {peliculas.map((pelis)=>{
        return <div className='peliculas' key={pelis.id}>Titulo: {pelis.nombre}</div>
      })}
    </div>
  )
}

export default Peliculas