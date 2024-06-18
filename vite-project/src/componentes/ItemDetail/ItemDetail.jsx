function ItemDetail({id,title,price,images,category,description}){
  
    return(
        <div className="grid grid-cols-2" >
            <article className="p-4 text-black bg-red-300 rounded-md shadow-xl">
              <img src={images} alt={title} className="object-contain aspect-square"/>
              <h2 className="font-bold truncate">{title}</h2>
              <p>{description}</p>
              <p>${price}</p>
              
            </article>
              
        </div>
    )
}
export default ItemDetail