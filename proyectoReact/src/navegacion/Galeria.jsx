import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Galeria = () => {
  return (
    <div>
    <h2>Galeria</h2>
    <nav>
      
      <Link to="/galeria/titulo">Titulo</Link>
      <Link to="/galeria/director">Director</Link>
      <Link to="/galeria/interprete">Interprete</Link> 
    </nav>
    <Outlet />
    </div>
    
  )
}

export default Galeria