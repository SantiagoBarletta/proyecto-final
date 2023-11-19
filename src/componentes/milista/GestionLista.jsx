import { useState, useEffect } from "react";
import FormularioMiLista from "./FormularioMiLista"
import MiLista from "./MiLista";

const GestionLista = () =>{
// Estado para almacenar las pociones
const [items, setItems] = useState([]);

//Carga inicial de pociones desde localStorage
useEffect(() => {
    const itemsGuardados = JSON.parse(localStorage.getItem('items'));
    if(itemsGuardados){
        setItems(itemsGuardados)
    }
}, []);

//Almacena las pociones en local storage cuando cambia el estado
useEffect (() => {
    localStorage.setItem('items', JSON.stringify(items))
}, [items])


//Marcar una poción como completada o no
const vistoItem = (id) =>{
    const nuevosItems = items.map((item) =>
    item.id === id ? { ...item, vista: !item.vista }:item
    )
    setItems(nuevosItems);

}


// Eliminar pocion de la lista
const eliminarItem = (id) =>{
    const nuevosItems = items.filter((item) => item.id !==id);
    setItems(nuevosItems)
};

//Agregar una nueva pocion a la lista
const agregarItem = (nombre) =>{
    const nuevoItem ={
        id: Date.now(), //generar ID unico
        nombre,
        vista: false,
    };
    setItems([...items, nuevoItem])
};

    return(
        <div>
            <h1> Gestión de peliculas a ver </h1>
            <FormularioMiLista agregarItem={agregarItem} />
            
            <MiLista
            items={items}
            vistoItem={vistoItem}
            eliminarItem={eliminarItem}
            />
        
        </div>
    )
}

export default GestionLista;