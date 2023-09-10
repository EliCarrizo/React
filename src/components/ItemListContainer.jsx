import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { categoria } = useParams()

    console.log(categoria)

    const productos = [
        {id: 1, nombre:"Producto A", descripcion: "Descripcion del producto A", stock: 10, categoria: "A"},
        {id: 1, nombre:"Producto B", descripcion: "Descripcion del producto B", stock: 15,categoria: "A"},
        {id: 1, nombre:"Producto C", descripcion: "Descripcion del producto C", stock: 4, categoria: "B"},
        {id: 1, nombre:"Producto D", descripcion: "Descripcion del producto D", stock: 60, categoria: "B"},
        {id: 1, nombre:"Producto E", descripcion: "Descripcion del producto E", stock: 100, categoria: "C"},
        {id: 1, nombre:"Producto F", descripcion: "Descripcion del producto F", stock: 2, categoria: "C"},
    ]

    const getProductos = new Promise((resolve, reject) => {
      if(productos.length > 0 ) {
          setTimeout (() => {
              resolve(productos)
          }, 1500)
      } else {
          reject(new Error("No hay datos registrados"))
      }
  })


  getProductos
    .then((res) => {
    })
    .catch((error) => {
        console.log(error)
    })
  }

  const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
  return (
      <>
        {
          categoria ? <ItemList productos ={filteredProducts} /> : <ItemList productos={productos}/>
        }

      </>
  )
/*const ItemListContainer = ({greeting}) => {
  return (
    <h1>{greeting}</h1>
  )
}*/

export default ItemListContainer