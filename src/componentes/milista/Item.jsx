import './MiLista.css'


const Item = ({ item, vistoItem, eliminarItem, verSinopsis }) =>{
    const { id, nombre, sinopsis, vista, mostrar } = item;
    
    const completar = () =>{
        vistoItem(id);
    };

    const eliminar = () =>{
        eliminarItem(id);
    }

    const ver = () =>{
        verSinopsis(id);
    }

    return(
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
        
        </div>
    )
}


export default Item;