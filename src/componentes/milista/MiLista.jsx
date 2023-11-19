import Item from "./Item";



const MiLista = ({ items, vistoItem, eliminarItem }) =>{
    return(
        <div className="contenidoMiLista">
            {items.map((item) =>(
                <Item 
                    key={item.id}
                    item={item}
                    vistoItem={vistoItem}
                    eliminarItem={eliminarItem}
                />

            ) )}
        </div>
    )
}


export default MiLista;