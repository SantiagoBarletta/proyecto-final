import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SliderPeliculas.css'

function DetallePeliculaSlider() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=dd00aa6b89a4eaf22b5fbf601827b192`;

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
        <div>
          <h2>Detalle de la Película</h2>
          <h3>{pelicula.original_title}</h3>
          <p>Resumen: {pelicula.overview}</p>
          <p>Popularidad: {pelicula.popularity}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.original_title} />
        </div>
      )}
    </div>
  );
}

export default DetallePeliculaSlider;
