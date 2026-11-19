import "./App.css";
import Cabecera from "./Contenedores/Cabecera.jsx";
import ContenidoMain from "./Contenedores/ContenidoMain.jsx";
import Menu from "./routes/Menu.jsx";
import Rutas from "./routes/Rutas.jsx"
import Pie from "./Contenedores/Pie.jsx";
const App = () => {
  

  return (
      <>
      <Cabecera/>
        <ContenidoMain>
          <Menu/>
          <Rutas/>
        </ContenidoMain>
        <Pie/>
      </>
  );
};

export default App;