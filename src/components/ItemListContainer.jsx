import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { categoria } = useParams()

    console.log(categoria)

    const productos = [
        {id: 1, nombre:"GOKU", descripcion: "Descripcion del producto A", stock: 10, categoria: "A"},
        {id: 2, nombre:"VEGETTA", descripcion: "Descripcion del producto B", stock: 15,categoria: "A"},
        {id: 3, nombre:"CELL", descripcion: "Descripcion del producto C", stock: 4, categoria: "B"},
        {id: 4, nombre:"BULMA", descripcion: "Descripcion del producto D", stock: 60, categoria: "B"},
        {id: 5, nombre:"SEIYA", descripcion: "Descripcion del producto E", stock: 100, categoria: "C"},
        {id: 6, nombre:"ANDROMEDA", descripcion: "Descripcion del producto F", stock: 2, categoria: "C"},
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

    const filteredProducts = productos.filter((producto) => producto.categoria === categoria)
      return (
          <>
            {
              categoria ? <ItemList productos ={filteredProducts} /> : <ItemList productos={productos} />
            }

          </>
      )
}

export default ItemListContainer