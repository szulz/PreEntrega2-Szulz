import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"



function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer id={8}/>
      
    </>
  )
}

export default App
