import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SliderPeliculas.css";

function DetallePeliculaSlider() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [pelicula, setPelicula] = useState({});
  const [trailerKey, setTrailerKey] = useState(null);
  const [plataformas, setPlataformas] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
      const trailerUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
      const platformsUrl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=dd00aa6b89a4eaf22b5fbf601827b192&region=AR`;

      try {
        const [detailsResponse, trailerResponse, platformsResponse] =
          await Promise.all([
            fetch(movieDetailsUrl),
            fetch(trailerUrl),
            fetch(platformsUrl),
          ]);

        const detailsData = await detailsResponse.json();
        const trailerData = await trailerResponse.json();

        setPelicula(detailsData);

        // Buscar el primer video de tipo 'Trailer' en la respuesta de la API de trailers
        const trailer = trailerData.results.find(
          (video) => video.type === "Trailer"
        );

        // Si se encuentra un trailer, establecer el estado del enlace del trailer
        if (trailer) {
          setTrailerKey(trailer.key);
        }

        // Obtener las plataformas de transmisión si están disponibles
        const platformsData = await platformsResponse.json();
        const availablePlatforms = getAvailablePlatforms(platformsData);

        setPlataformas(availablePlatforms);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const getAvailablePlatforms = (data) => {
    if (data.results && data.results.AR) {
      // Verificar varias categorías
      const categories = ["flatrate", "buy", "rent"];
      for (const category of categories) {
        if (data.results.AR[category] && data.results.AR[category].length > 0) {
          return data.results.AR[category];
        }
      }
    }
    return [];
  };

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
              <img
                src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                alt={pelicula.original_title}
              />
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
              <div className="plataformas">
                <p>Disponible en:</p>
                {plataformas.length > 0 ? (
                  <ul>
                    {plataformas.map((plataforma) => (
                      <li key={plataforma.provider_id}>
                        <img
                          src={`https://www.themoviedb.org/t/p/original${plataforma.logo_path}`}
                          alt={plataforma.provider_name}
                        />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>Aún no disponible en ninguna plataforma.</p>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetallePeliculaSlider;
