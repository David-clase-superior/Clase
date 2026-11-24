import React, { Component } from 'react';
import {useParams, Link} from 'react-router-dom';
import {peliculas} from "../navegacion/peliculas.json";

const PeliculaDetalle = () => {
  const { id } = useParams();
  const pelicula = peliculas.find((p) => p.id === parseInt(id));

  if(!pelicula){
    return <h2>No se ha encontrado la pelicula.</h2>;
  }

  return (
    <div className='detalle-pelicula'>
      <h2>{pelicula.nombre}</h2>
      <img src={pelicula.cartelera} alt={pelicula.nombre} width="200"/>
      
        <li><strong>ID:</strong> {pelicula.id}</li>
        <li><strong>DIRECTOR: </strong>{pelicula.director}</li>
        <li><strong>CLASIFICACIÓN: </strong>{pelicula.clasificacion}</li>
        <li><strong>RECAUDACIÓN: </strong>{pelicula.recaudacion}</li>
        <li><strong>NOTA: </strong>{pelicula.nota}</li>
        <li><strong>RESUMEN: </strong>{pelicula.resumen}</li>
      
      <Link to="/peliculas">Volver al listado</Link>
    </div>
  );
};

export default PeliculaDetalle;