import Item from "../Item/Item"
function ItemList({ productos }) { 
    return (
        <div>
            {productos.map((prod)=> {
                return (
                <Item key={prod.id}{...prod}/>)}
            )}
            
        </div>
    );
}

export default ItemList