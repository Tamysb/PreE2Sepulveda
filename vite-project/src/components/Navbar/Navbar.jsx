import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return(
    <nav className="flex items-center justify-between">
        <Link to="/"className="flex items-center gap-2 text-3xl font-blod">Ecomerce</Link> 
        <nav className="flex items-center justify-between gap-2 p-4 text-xl">
            
            <NavLink to="/category/beauty">Belleza</NavLink>
            <NavLink to="/category/fragrances">Perfume</NavLink>
            <NavLink to="/category/skin-care">Skin Care</NavLink>
        </nav>
        <CartWidget/>
    </nav>
    
        
    )

}
export default Navbar