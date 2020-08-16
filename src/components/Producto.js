import React from 'react';

const Producto = ({producto, productos, carrito, agregarProducto}) => {
    
    const { nombre, precio, id } = producto; //Se extraen los valores para manipularlos mas facil

    const seleccionarProducto = id => {
        producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto(
            [...carrito, 
            producto]);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>
            <button
                type = "button"
                onClick = {() => seleccionarProducto(id)}
            >Comprar</button>            
        </div>

     );
}
 
export default Producto;