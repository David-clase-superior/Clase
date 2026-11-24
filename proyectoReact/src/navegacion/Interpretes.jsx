import React from 'react'
import "./interpretes.css";
import {peliculas} from "../navegacion/peliculas.json";

const Interpretes = () => {

  return (
    <>
      <h2>Actores</h2>
      {peliculas.map((peli) => (
          <div key={peli.id}>
              <h3>{peli.nombre}</h3>
                {peli.actores.map((actor, index) => (
                <div key={index} className="actor">
                  <div>{actor.nombre}</div>
                  <div>{actor.fechaNacimiento}</div>
                </div>
    ))}
          </div>
))}
    </>
  )
}

export default Interpretes