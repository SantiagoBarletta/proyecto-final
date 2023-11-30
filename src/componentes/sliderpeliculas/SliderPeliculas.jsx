import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderPeliculas.css";

function SliderPeliculas() {
  const [peliculas, setPeliculas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(5); // Estado para almacenar la cantidad de elementos a mostrar

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
        setPeliculas(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);
  useEffect(() => {
    // Ajustar la cantidad de elementos a mostrar al cargar la página
    setSlidesToShow(cantidadMuestraDesplaza());

    // Ajustar la cantidad de elementos a mostrar al cambiar el tamaño de la pantalla
    const handleResize = () => {
      setSlidesToShow(cantidadMuestraDesplaza());
    };

    window.addEventListener("resize", handleResize);

    // Limpiar el evento de escucha al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // El segundo argumento [] asegura que este useEffect solo se ejecute una vez al cargar el componente

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
    slidesToShow: slidesToShow, // Usar el estado actualizado
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