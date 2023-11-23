import PropTypes from 'prop-types';
import Estrellas from './Estrellas';

const Item = ({ item, vistoItem, eliminarItem, verSinopsis, actualizarValoracion }) => {
  const { id, nombre, sinopsis, vista, mostrar, valoracion: valoracionItem } = item;

  const completar = () => {
    vistoItem(id);
  };

  const eliminar = () => {
    eliminarItem(id);
  };

  const ver = () => {
    verSinopsis(id);
  };

  return (
    <div className="item">
      <div className={vista ? 'vista' : 'pendiente'}>{nombre}</div>
      <div className={mostrar ? 'sinopsis' : 'sinopsis-no'}><p>{sinopsis}</p></div>
      <button onClick={completar}>
        {vista ? 'Pendiente' : 'Vista'}
      </button>
      <button onClick={eliminar}>Eliminar</button>
      <button onClick={ver}>
        {mostrar ? 'Ocultar Sinopsis' : 'Mostrar Sinopsis'}
      </button>
      <div className="valoracion">
        <p>Valoración: </p>
        <Estrellas valoracion={valoracionItem} onValoracionChange={(rating) => actualizarValoracion(id, rating)} /></div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    sinopsis: PropTypes.string.isRequired,
    vista: PropTypes.bool.isRequired,
    mostrar: PropTypes.bool.isRequired,
    valoracion: PropTypes.number.isRequired,
  }).isRequired,
  vistoItem: PropTypes.func.isRequired,
  eliminarItem: PropTypes.func.isRequired,
  verSinopsis: PropTypes.func.isRequired,
  valoracion: PropTypes.number.isRequired,
  actualizarValoracion: PropTypes.func.isRequired,
};

export default Item;
