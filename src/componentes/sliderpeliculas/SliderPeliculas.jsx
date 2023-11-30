import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderPeliculas.css";

function SliderPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresResponse = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=dd00aa6b89a4eaf22b5fbf601827b192"
      );
      const genresData = await genresResponse.json();

      const terrorGenre = genresData.genres.find(
        (genre) => genre.name === "Horror"
      );

      if (terrorGenre) {
        fetchMovies(terrorGenre.id);
      } else {
        console.error("Género de terror no encontrado");
        setLoading(false);
      }
    };

    const fetchMovies = async (genreId) => {
      const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=dd00aa6b89a4eaf22b5fbf601827b192&with_genres=${genreId}&language=es-ES`;

      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        // Filtrar películas con sinopsis y trailer
        const filteredMovies = await Promise.all(
          data.results
            .filter(
              (pelicula) =>
                pelicula.overview &&
                pelicula.overview.trim() !== "" &&
                hasTrailer(pelicula.id)
            )
            .map(async (pelicula) => ({
              ...pelicula,
              trailerKey: await getTrailerKey(pelicula.id),
            }))
        );

        setPeliculas(filteredMovies);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    const hasTrailer = async (movieId) => {
      const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
      const trailerResponse = await fetch(trailerUrl);
      const trailerData = await trailerResponse.json();

      return trailerData.results.some((video) => video.type === "Trailer");
    };

    const getTrailerKey = async (movieId) => {
      const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=dd00aa6b89a4eaf22b5fbf601827b192&language=es-ES`;
      const trailerResponse = await fetch(trailerUrl);
      const trailerData = await trailerResponse.json();

      const trailer = trailerData.results.find(
        (video) => video.type === "Trailer"
      );

      return trailer ? trailer.key : null;
    };

    fetchGenres();
  }, []);

  useEffect(() => {
    setSlidesToShow(cantidadMuestraDesplaza());

    const handleResize = () => {
      setSlidesToShow(cantidadMuestraDesplaza());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cantidadMuestraDesplaza = () => {
    if (window.innerWidth <= 768) {
      return 1;
    } else if (window.innerWidth <= 992) {
      return 3;
    } else {
      return 5;
    }
  };

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text || "Sinopsis no disponible";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
  };

  return (
    <div>
      {loading ? (
        <p>Cargando Películas...</p>
      ) : (
        <>
          <h2 className="seccion-name">Cine de terror</h2>
          <Slider {...settings}>
            {peliculas.map((pelicula) => (
              <div key={pelicula.id} className="pelicula-item">
                <div className="contenedor_imagen">
                  <Link to={`/DetallePeliculaSlider/${pelicula.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`}
                      alt={pelicula.original_title}
                    />
                  </Link>
                </div>
                <div className="detalleslider">
                  <h3>{pelicula.original_title}</h3>
                  <p>Resumen: {truncateText(pelicula.overview, 150)}</p>
                  <p>Puntaje IMDB: {pelicula.vote_average}</p>
                  {pelicula.trailerKey && (
                    <div className="trailer">
                      <p>Trailer:</p>
                      <iframe
                        width="800"
                        height="600"
                        src={`https://www.youtube.com/embed/${pelicula.trailerKey}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </>
      )}
    </div>
  );
}

export default SliderPeliculas;
