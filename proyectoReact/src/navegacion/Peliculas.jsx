import React from 'react'
import {peliculas} from "../navegacion/peliculas.json";
import { useNavigate } from 'react-router-dom';
const Peliculas = () => {
const navigate = useNavigate();

  return (
    <>
    <h1>Listado peliculas</h1>

    {peliculas.map((v)=>(
      <div className='peliculas' key={v.id}>
        <h2>{v.nombre}</h2>
        <img src={v.cartelera} alt={v.nombre} width="150"/>
        <div>{v.clasificacion}</div>
      
      
      <button className='boton-pelicula'
      onClick={()=> navigate(`/peliculas/${v.id}`)}>Ver Detalles{console.log(v.id)}</button>
      </div>
      ))}      
    </>
  )
}

export default Peliculas