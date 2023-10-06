import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const { categoria } = useParams()

    console.log(categoria)

    const productos = [
        {id: 1, nombre:"GOKU", descripcion: "Descripcion GOKU", stock: 10, categoria: "A"},
        {id: 2, nombre:"VEGETTA", descripcion: "Descripcion VEGETTA", stock: 15,categoria: "A"},
        {id: 3, nombre:"CELL", descripcion: "Descripcion CELL", stock: 4, categoria: "B"},
        {id: 4, nombre:"BULMA", descripcion: "Descripcion BULMA", stock: 60, categoria: "B"},
        {id: 5, nombre:"SEIYA", descripcion: "Descripcion SEIYA", stock: 100, categoria: "C"},
        {id: 6, nombre:"ANDROMEDA", descripcion: "Descripcion ANDROMEDA", stock: 2, categoria: "C"},
    ]

    const getProductos = new Promise((resolve, reject) => {
      if(productos.length > 0 ) {
          setTimeout (() => {
              resolve(productos)
          }, 5000)
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