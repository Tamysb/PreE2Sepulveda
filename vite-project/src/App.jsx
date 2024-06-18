import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
function App(){
  return (
  < >
  <Navbar className="flex justify-between p-4 bg-[rgba(255,255,255,0.3)] grow"/>
  <ItemListContainer/>
  <ItemDetailContainer/>

  </>
  )
}
export default App