import React from 'react';
import Producto from './Producto';
import './carrito.css';

const Carrito = ({carrito}) => (
    <div className = "carrito">
        <h2>Tu Carrito de Compras</h2>
        {carrito === 0
        ? <p>Esta vacio</p>
        : carrito.map(producto => (
            <Producto
                key = {producto.id}
                producto = {producto}
            />
        ))}
    </div>
);
 
export default Carrito;

