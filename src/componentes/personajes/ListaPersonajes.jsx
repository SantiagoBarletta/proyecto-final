// ListaPersonajes.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './personajes.css';

function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      const genresResponse = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=dd00aa6b89a4eaf22b5fbf601827b192");
      const genresData = await genresResponse.json();

      const terrorGenre = genresData.genres.find(genre => genre.name === "Horror");

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
        setPersonajes(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Puedes ajustar la cantidad de elementos mostrados en un momento dado
    slidesToScroll: 1,
  };

  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text || "Sinopsis no disponible";
  };

  return (
    <div>
      <h2>Lista de Películas de Terror</h2>
      {loading ? (
        <p>Cargando Películas...</p>
      ) : (
        <Slider {...settings}>
          {personajes.map((personaje) => (
            <div key={personaje.id} className="personaje-item">
              <h3>{personaje.original_title}</h3>
              <p>Resumen: {truncateText(personaje.overview, 200)}</p>
              <p>Popularidad: {personaje.popularity}</p>
              <div className="contenedor_imagen">
                <img src={`https://image.tmdb.org/t/p/w500/${personaje.poster_path}`} alt={personaje.original_title} />
              </div>
              <Link to={`/DetallePersonaje/${personaje.id}`}>Ver Detalle</Link>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default ListaPersonajes;
