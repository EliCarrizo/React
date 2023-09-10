import {BrowserRouter, Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Cart from "./components./Cart"

const App = () => {


  return (
    <BrowserRouter>

      <NavBar />{ <ItemListContainer classname='title' greeting={"Welcome to the store 🖐🏻😊"}/> }
      <Routes>
        <Route exact path='/cart' element={<Cart />} >/
        <Route exact path='/' element={<ItemListContainer />} >/
        <Route patch="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact patch="/item/:id" element={<ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
