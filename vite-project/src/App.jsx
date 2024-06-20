import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App(){
  return (
  <BrowserRouter>
  <Navbar className="flex justify-between p-4 bg-[rgba(255,255,255,0.3)] grow"/>
  <Routes>
  <Route path="/" element={<ItemListContainer/>}/>
    <Route path="/category/:id" element={<ItemListContainer/>}/>
    <Route path="/products/:id" element={<ItemDetailContainer/>}/>
  </Routes>
  </BrowserRouter>
  )
}
export default App