import { useState, useEffect } from "react";
import FormularioMiLista from "./FormularioMiLista"
import MiLista from "./MiLista";
import './Milista.css'

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

//Mostrar ocultar sinopsis
const verSinopsis = (id) =>{
    const nuevosItems = items.map((item) =>
    item.id === id ? { ...item, mostrar: !item.mostrar }:item
    )
    setItems(nuevosItems);
}


// Eliminar pocion de la lista
const eliminarItem = (id) =>{
    const nuevosItems = items.filter((item) => item.id !==id);
    setItems(nuevosItems)
};

//Agregar una nueva pocion a la lista
const agregarItem = ({ nombre, sinopsis }) => {
    const nuevoItem ={
        id: Date.now(), //generar ID unico
        nombre,
        sinopsis, 
        vista: false,
        ver: false
    };
    setItems([...items, nuevoItem])
};

    return(
        <div>
            <h2> Mi Lista </h2>
            <FormularioMiLista agregarItem={agregarItem} />
            
            <MiLista
            items={items}
            vistoItem={vistoItem}
            eliminarItem={eliminarItem}
            verSinopsis={verSinopsis}
            />
        
        </div>
    )
}

export default GestionLista;