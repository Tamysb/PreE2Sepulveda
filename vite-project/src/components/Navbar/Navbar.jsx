import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"

function Navbar(){
    return(
    <nav className="flex gap-2 text-xl item-center">
        <nav>
            <Link to="/"className="text-3xl font-blod">Ecomerce</Link> 
            <NavLink to="/category/beauty">Belleza</NavLink>
            <NavLink to="/category/fragrances">Perfume</NavLink>
            <NavLink to="/category/skin-care">Skin Care</NavLink>
        </nav>
        <CartWidget/>
    </nav>
    
        
    )

}
export default Navbar