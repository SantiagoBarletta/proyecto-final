import { useState } from "react";
import PropTypes from "prop-types";

const FormularioMiLista = ({ agregarItem }) => {
  const [nombre, setNombre] = useState("");
  const [sinopsis, setSinopsis] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que haya un nombre antes de agregar un item
    if (nombre.trim() === "") {
      return;
    }
    // Llamar a la función agregarItem con los datos del nuevo item
    agregarItem({ nombre, sinopsis });

    // Limpiar los campos después de agregar el item
    setNombre("");
    setSinopsis("");
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Sinopsis:
          <textarea
            value={sinopsis}
            onChange={(e) => setSinopsis(e.target.value)}
          />
        </label>
        <button type="submit">Agregar a la lista</button>
      </form>
    </div>
  );
};

FormularioMiLista.propTypes = {
  agregarItem: PropTypes.func.isRequired,
};

export default FormularioMiLista;
