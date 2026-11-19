import "./App.css";
import Cabecera from "./Contenedores/Cabecera.jsx";
import ContenidoMain from "./Contenedores/ContenidoMain.jsx";
import Menu from "./routes/Menu.jsx";
import Rutas from "./routes/Rutas.jsx"
const App = () => {
  

  return (
      <>
      <Cabecera/>
        <ContenidoMain>
          <Menu/>
          <Rutas/>
        </ContenidoMain>
      </>
  );
};

export default App;