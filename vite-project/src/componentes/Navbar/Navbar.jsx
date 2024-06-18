import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return(<nav className="flex gap-2 text-xl item-center">
        <h1 className="text-3xl font-blod">Ecomerce</h1>
        <nav> 
            <a href="">Home</a>
            <a href=""></a>
            <a href="">Sale</a>
        </nav>
        <CartWidget/>
    </nav>
    
        
    )

}
export default Navbar