// src/routes/Rutas.jsx
import { Routes, Route } from "react-router-dom";
import Inicio from "../navegacion/Inicio.jsx";
import Peliculas from "../navegacion/Peliculas.jsx";
import AcercaDe from "../navegacion/AcercaDe.jsx";
import Galeria from "../navegacion/Galeria.jsx";
import Interpretes from "../navegacion/Interpretes.jsx";
import PeliculaDetalle from "../Contenedores/PeliculaDetalle.jsx";

const Rutas = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/peliculas" element={<Peliculas/>} />
      <Route path="/peliculas/:id" element={<PeliculaDetalle/>}/>
      <Route path="/acercade" element={<AcercaDe/>} />
      <Route path="/interpretes" element={<Interpretes/>} />


      //Rutas hijas de Galeria, al padre no se le cierra con /
      {/*<Route path="/galeria" element={<Galeria/>} >
      <Route path="/titulo" element={<GaleriaTitulo/>} />
      <Route path="/interprete" element={<GaleriaInterprete/>} />
      <Route path="/director" element={<GaleriaDirector/>} />
      </Route>*/}
    </Routes>
  );
};

export default Rutas;