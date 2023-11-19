import PropTypes from "prop-types";
import imagenes from "../imagenes";
// Boostrap Card
import Card from "react-bootstrap/Card";

function Pelicula(props) {
  console.log("Ruta de la imagen:", imagenes[props.imagen]);

  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={imagenes[props.imagen]} alt={props.nombre} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.anio}</Card.Subtitle>
        <Card.Text>{props.sinopsis}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {" "}
          <b> Director:</b> {props.director}
        </small>
      </Card.Footer>
    </Card>

    // <article className="pelicula">
    //     <h2 className="tituloPelicula"> {props.nombre}</h2>
    //     <img src={imagenes[props.imagen]} alt={props.nombre} className="poster" />
    //     <b> Año:</b> {props.anio} <br />
    //     <b> Director:</b> {props.director}
    //     <p className="sinopsis"> {props.sinopsis}</p>
    // </article>
  );
}

Pelicula.propTypes = {
  nombre: PropTypes.string.isRequired,
  anio: PropTypes.number,
  sinopsis: PropTypes.string,
  director: PropTypes.string,
  imagen: PropTypes.string,
};

export default Pelicula;
