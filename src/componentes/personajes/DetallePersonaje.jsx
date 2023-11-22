// DetallePersonaje.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetallePersonaje() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=dd00aa6b89a4eaf22b5fbf601827b192`;

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setPersonaje(data);
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
        <p>Cargando Detalle del Personaje...</p>
      ) : (
        <div>
          <h2>Detalle del Personaje</h2>
          <h3>{personaje.original_title}</h3>
          <p>Resumen: {personaje.overview}</p>
          <p>Popularidad: {personaje.popularity}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${personaje.poster_path}`} alt={personaje.original_title} />
        </div>
      )}
    </div>
  );
}

export default DetallePersonaje;
