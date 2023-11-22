import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import Seccion from "./componentes/section/Seccion";
import ListaPeliculas from "./componentes/peliculas/ListaPeliculas";
import Menu from "./componentes/menu/Menu";
import GestionLista from "./componentes/milista/GestionLista";
import "bootstrap/dist/css/bootstrap.min.css";
import ListaPersonajes from './componentes/personajes/ListaPersonajes.jsx'
import DetallePersonaje from './componentes/personajes/DetallePersonaje.jsx'

function App() {

  return (
    <Router>
      <><Menu />
        <Header />
        
        <main>
        <Routes>
          <Route path="/" element={<Seccion />} />
          <Route path="/milista" element={<GestionLista />} />
          <Route path="/peliculas" element={<ListaPeliculas />} />
          <Route path="/personajes" element={<ListaPersonajes />} />
          <Route path="/DetallePersonaje/:id" element={<DetallePersonaje />} />
        </Routes>
        </main>
        <Footer />
        
      </>
    </Router>
  );
}

export default App;
