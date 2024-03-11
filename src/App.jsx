import { createContext, useContext, useEffect, useState } from "react"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { getProductById } from "./products/productMock"
export const CartContext = createContext(false)


function App() {
  const [cart, setCart] = useState([])

  const addItem = ({ product }, quantity) => {
    if (cart.find(e => e.id === product.id)) {
      console.log('This product is already on the cart')
    } else {
      setCart(cart => [...cart, product])
      console.log('product added')
    }
  }

  const inCart = () => {
    let cantidad = cart.find(e => e.id)
    console.log(cantidad)
    return cantidad
  }

  return (
    <>
      <BrowserRouter >
        <CartContext.Provider value={{ addItem, cart }}>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter >
    </>
  )
}
/**/
export default App
