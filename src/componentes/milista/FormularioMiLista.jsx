import { useState } from 'react';

const FormularioMiLista = ({ agregarItem }) => {
const [nuevoItem, setNuevoItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevoItem.trim() !== '') {
        agregarItem(nuevoItem);
        setNuevoItem('');
        }
    };

    return (
        <form onSubmit={handleSubmit} class="input-group mb-3">
        <input className='class="custom-file-label'
            type="text"
            value={nuevoItem}
            onChange={(e) => setNuevoItem(e.target.value)}
            placeholder="Nueva Película"
        />
        <button type="submit" className="btn btn-primary btn-sm">Agregar</button>
        </form>
    );
    };

export default FormularioMiLista;