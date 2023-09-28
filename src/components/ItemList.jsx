import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
// Verifica si productos está definido
if (!productos || productos.length === 0) {
    return null; // O puedes retornar un mensaje indicando que no hay productos
  }

  return (
    <div>
        {
            productos.map((p) => {
                return (
                        <Item producto={p} key={p.id}
                        />

                )
            })
        }
    </div>
    )
}

export default ItemList