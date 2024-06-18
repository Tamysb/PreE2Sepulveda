import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

function ItemDetailContainer(){
    const [producto,setProducto]=useState({})
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
            .then((res) =>{
                return res.json()
            })
            .then((data)=>{
                console.log(data)
                setProducto(data)
            });
    },[])
    return(
        <div>
            <ItemDetail {...producto}/>
        </div>

    )
}
export default ItemDetailContainer