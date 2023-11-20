import React, { useState } from 'react';

const FormularioMiLista = ({ agregarItem }) => {
  const [nuevoItem, setNuevoItem] = useState({
    nombre: '',
    sinopsis: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevoItem.nombre.trim() !== '' && nuevoItem.sinopsis.trim() !== '') {
      agregarItem(nuevoItem);
      setNuevoItem({ nombre: '', sinopsis: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mb-3">
      <input
        type="text"
        value={nuevoItem.nombre}
        onChange={(e) => setNuevoItem({ ...nuevoItem, nombre: e.target.value })}
        placeholder="Nueva Película"
      />
      <textarea
        className='textareasinopsis'
        value={nuevoItem.sinopsis}
        onChange={(e) => setNuevoItem({ ...nuevoItem, sinopsis: e.target.value })}
        placeholder="Sinopsis"
      />
      <button type="submit" className="btn btn-primary btn-sm">Agregar</button>
    </form>
  );
};

export default FormularioMiLista;
