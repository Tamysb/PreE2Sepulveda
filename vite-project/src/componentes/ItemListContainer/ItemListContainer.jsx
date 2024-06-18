import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(){
    const [productos,setProductos]= useState([])
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProductos(data.products)
        })  
    },[])

    return (
        <div>
            <h1 className="text-2xl font-blod"></h1> 
            <ItemList productos={productos}/>

        </div>

    )
}
export default ItemListContainer