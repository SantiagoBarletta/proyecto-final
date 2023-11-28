import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SliderPeliculas.css'




function DetallePeliculaSlider() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pelicula, setPelicula] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
      const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
  
      try {
        const [detailsResponse, trailerResponse] = await Promise.all([
          fetch(movieDetailsUrl),
          fetch(trailerUrl)
        ]);
  
        const detailsData = await detailsResponse.json();
        const trailerData = await trailerResponse.json();
  
        setPelicula(detailsData);
  
        // Buscar el primer video de tipo 'Trailer' en la respuesta de la API de trailers
        const trailer = trailerData.results.find(video => video.type === 'Trailer');
  
        // Si se encuentra un trailer, establecer el estado del enlace del trailer
        if (trailer) {
          setTrailerKey(trailer.key);
        }
  
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    fetchMovieDetails();
  }, [id]);
  

  return (
    <div>
      {loading ? (
  <p>Cargando Detalle de la Película...</p>
) : (
  <>
    <div className="titulo">
      <p>{pelicula.original_title}</p>
    </div>
    <div className="contenedor-detalles">
      <div className="poster">
        <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.original_title} />
      </div>
      <div className="datos">
        <h4>Sinopsis:</h4>
        <p>{pelicula.overview}</p>
        <p>Puntaje: {pelicula.vote_average}</p>
        {trailerKey && (
          <div className="trailer">
            <p>Trailer:</p>
            <iframe
              width="800"
              height="600"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  </>
)}

    </div>
  );
}

export default DetallePeliculaSlider;
