import Pelicula from "./Peliculas";
import peliculas from './datosPeliculas';
//CSS
import './ListaPeliculas.css';

function ListaPeliculas() {
    return (
      <>
      <h2>Top 6 de películas</h2>
      <section className="contenidoPeliculas">
        {peliculas.map((pelicula, index) => (
          <Pelicula
            key={index}
            nombre={pelicula.nombre}
            anio={pelicula.anio}
            sinopsis={pelicula.sinopsis}
            director={pelicula.director}
            imagen={pelicula.imagen}
          />
        ))}
      </section></>
    );
  }
  

export default ListaPeliculas;

