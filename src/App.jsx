import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
      <Navbar />
      { <ItemListContainer classname='title' greeting={"Welcome to the store 🖐🏻😊"}/> }
    </>
  )
}

export default App
