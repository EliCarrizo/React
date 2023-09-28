import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
        {id: 1, nombre:"GOKU", descripcion: "It is a the best", stock: 10, categoria: "A"},
        {id: 2, nombre:"VEGETTA", descripcion: "Descripcion del producto B", stock: 15,categoria: "B"},
        {id: 3, nombre:"CELL", descripcion: "Descripcion del producto C", stock: 4, categoria: "C"},
        {id: 4, nombre:"BULMA", descripcion: "Descripcion del producto D", stock: 60, categoria: "D"},
        {id: 5, nombre:"SEIYA", descripcion: "Descripcion del producto E", stock: 100, categoria: "E"},
        {id: 6, nombre:"ANDROMEDA", descripcion: "Descripcion del producto F", stock: 2, categoria: "F"},
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
    console.log(productos)

    return (
        <>
            <ItemDetail
                productos={productos}
            />
        </>
    )
}

export default ItemDetailContainer