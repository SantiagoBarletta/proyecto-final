import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./componentes/footer/Footer";
import Header from "./componentes/header/Header";
import Seccion from "./componentes/section/Seccion";
import ListaPeliculas from "./componentes/peliculas/ListaPeliculas";
import Menu from "./componentes/menu/Menu";
import GestionLista from "./componentes/milista/GestionLista";
import "bootstrap/dist/css/bootstrap.min.css";
import DetallePeliculaSlider from "./componentes/sliderpeliculas/DetallePeliculaSlider.jsx";
import SliderPeliculas from "./componentes/sliderpeliculas/Sliderpeliculas.jsx";


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
          <Route path="/sliderpeliculas" element={<SliderPeliculas />} />
          <Route path="/DetallePeliculaSlider/:id" element={<DetallePeliculaSlider />} />
        </Routes>
        </main>
        <Footer />
        
      </>
    </Router>
  );
}

export default App;
