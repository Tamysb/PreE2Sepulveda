const Item = ({id,title,images,price})=>{
    return(
        <div className="grid grid-cols-3 gap-8">
            <article className="p-4 text-black transition-all bg-white rounded-md shadow-xl hover:scale-105">
                <img src={images[0]} alt={title} className="object-contain aspect-square"/>
                <h2 className="font-bold truncate">{title}</h2>
                <p className="text-gray-400">${price}</p>
            </article>
        </div>
    
    )
}
export default Item