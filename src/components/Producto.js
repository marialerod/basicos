import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {
    
    const { nombre, precio, id } = producto; //Se extraen los valores para manipularlos mas facil

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0]; //Toma el objeto del listado de productos
        agregarProducto([ //Modifica el state, copiando los valores de carrito y agregandole el producto seleccionado
            ...carrito, 
            producto]);
    }

    //Eliminar producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);
        agregarProducto(productos);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            {productos
                ?(
                    <button //Boton que se visualizara en el listado de los productos
                        type = "button"
                        onClick = {() => seleccionarProducto(id)}
                    >Comprar</button>
                )
                :(
                    <button //Boton que se visualizara en el listado del carrito
                        type = "button"
                        onClick = {() => eliminarProducto(id)}
                    >Eliminar</button>                    
                )     
            }
       
        </div>

     );
}
 
export default Producto;