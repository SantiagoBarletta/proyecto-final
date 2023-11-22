import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SliderPeliculas.css'

function DetallePeliculaSlider() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPelicula(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <p>Cargando Detalle de la Película...</p>
      ) : (
        <><div className="titulo"> <p>{pelicula.original_title}</p></div>
          <div className="contenedor-detalles">
            
            <div class="poster">
              <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.original_title} />
            </div>

            <div className="datos">
              <h4>Sinopsis:</h4><p> {pelicula.overview}</p>
              <p>Puntaje: {pelicula.vote_average}</p>
            </div>
          </div></>
      )}
    </div>
  );
}

export default DetallePeliculaSlider;
