import React from 'react'
import {peliculas} from "../navegacion/peliculas.json";
import PeliculaDetalle from '../Contenedores/PeliculaDetalle.jsx';
const Peliculas = () => {
  return (
    <>
      {peliculas.map((v)=>(
        <div className='peliculas' key={v.id}>{v.nombre}
          <div className='datos'>
            <div className='director'>Director: {v.director}</div>
            <div className='clasificacion'>Clasificacion: {v.clasificacion}</div>
            <div className='recaudacion'>Recaudación {v.recaudacion}</div>
            <div className='nota'>Nota: {v.nota}</div>
          </div>
        </div>
      ))}
      
    </>
  )
}

export default Peliculas