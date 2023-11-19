import './MiLista.css'


const Item = ({ item, vistoItem, eliminarItem }) =>{
    const { id, nombre, vista } = item;
    
    const completar = () =>{
        vistoItem(id);
    };

    const eliminar = () =>{
        eliminarItem(id);
    }

    return(
        <div className="item">
        <div className={vista ? 'vista' : 'pendiente'}>{nombre}</div>
        <button onClick={completar}>
            {vista ? 'Pendiente' : 'Vista'}
        </button>
        <button onClick={eliminar}>Eliminar</button>
        </div>
    )
}


export default Item;