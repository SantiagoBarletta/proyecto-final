import './MiLista.css'


const Item = ({ item, vistoItem, eliminarItem }) =>{
    const { id, nombre, sinopsis, vista } = item;
    
    const completar = () =>{
        vistoItem(id);
    };

    const eliminar = () =>{
        eliminarItem(id);
    }

    return(
        <div className="item">
        <div className={vista ? 'vista' : 'pendiente'}>{nombre}</div>
        <div className='sinopsis'><p>{sinopsis}</p></div>
        <button onClick={completar}>
            {vista ? 'Pendiente' : 'Vista'}
        </button>
        <button onClick={eliminar}>Eliminar</button>
        
        </div>
    )
}


export default Item;