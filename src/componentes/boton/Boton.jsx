import propTypes from "prop-types";
import "./Boton.css";

function Boton(props) {
  const estilosBoton = {
    backgroundColor: props.color,
  };
  return (
    <div>
      <button className="boton" style={estilosBoton} onClick={props.onClick}>
        {props.texto}
      </button>
    </div>
  );
}

Boton.propTypes = {
  color: propTypes.string,
  texto: propTypes.string.isRequired,
  onClick: propTypes.func,
};

export default Boton;
