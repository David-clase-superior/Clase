// src/routes/Menu.jsx
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/peliculas">Peliculas</Link>
      <Link to="/interpretes">Interpretes</Link>
      <Link to="/galeria">Galeria</Link>
      <Link to="/acercade">Acerca de</Link>
    </nav>
  );
};

export default Menu;