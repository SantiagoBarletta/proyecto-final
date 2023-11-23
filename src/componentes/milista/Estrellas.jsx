import PropTypes from 'prop-types';


const Estrellas = ({ valoracion, onValoracionChange }) => {
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);
  
    return (
      <div>
        {stars.map((star) => (
          <span
            key={star}
            onClick={() => onValoracionChange(star)}
            style={{ cursor: 'pointer', color: star <= parseInt(valoracion) ? 'gold' : 'gray' }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };
  
  Estrellas.propTypes = {
    valoracion: PropTypes.number.isRequired, // Asegura que valoracion sea un número y es requerido
    onValoracionChange: PropTypes.func.isRequired, // Asegura que onValoracionChange sea una función y es requerido
  };

export default Estrellas;
