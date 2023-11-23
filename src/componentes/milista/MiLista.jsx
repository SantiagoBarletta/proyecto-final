import PropTypes from 'prop-types';
import Item from './Item';

const MiLista = ({ items, vistoItem, eliminarItem, verSinopsis, valoracion, actualizarValoracion }) => {
  return (
    <div className='contenidoMiLista'>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          vistoItem={vistoItem}
          eliminarItem={eliminarItem}
          verSinopsis={verSinopsis}
          valoracion={valoracion}
          actualizarValoracion={actualizarValoracion}
        />
      ))}
    </div>
  );
};

MiLista.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      sinopsis: PropTypes.string.isRequired,
      vista: PropTypes.bool.isRequired,
      mostrar: PropTypes.bool.isRequired,
    })
  ).isRequired,
  vistoItem: PropTypes.func.isRequired,
  eliminarItem: PropTypes.func.isRequired,
  verSinopsis: PropTypes.func.isRequired,
  valoracion: PropTypes.number.isRequired,
  actualizarValoracion: PropTypes.func.isRequired,
};

export default MiLista;
