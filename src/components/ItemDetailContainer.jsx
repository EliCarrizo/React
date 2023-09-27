import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
        {id: 1, nombre:"GOKU", descripcion: "Descripcion del producto A", stock: 10, categoria: "A"},
        {id: 1, nombre:"VEGETTA", descripcion: "Descripcion del producto B", stock: 15,categoria: "B"},
        {id: 1, nombre:"Producto A", descripcion: "Descripcion del producto C", stock: 4, categoria: "C"},
        {id: 1, nombre:"Producto A", descripcion: "Descripcion del producto D", stock: 60, categoria: "D"},
        {id: 1, nombre:"Producto A", descripcion: "Descripcion del producto E", stock: 100, categoria: "E"},
        {id: 1, nombre:"Producto A", descripcion: "Descripcion del producto F", stock: 2, categoria: "F"},
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

    return (
        <>
            <ItemDetail
                productos={productos}
            />
        </>
    )
}

export default ItemDetailContainer