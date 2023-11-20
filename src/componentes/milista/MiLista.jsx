import Item from "./Item";



const MiLista = ({ items, vistoItem, eliminarItem, verSinopsis }) => {
    return(
        <div className="contenidoMiLista">
            {items.map((item) =>(
                <Item 
                    key={item.id}
                    item={item}
                    vistoItem={vistoItem}
                    eliminarItem={eliminarItem}
                    verSinopsis={verSinopsis}
                />

            ) )}
        </div>
    )
}


export default MiLista;