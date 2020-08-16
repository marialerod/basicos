import React from 'react';

const Producto = ({producto}) => {
    
    const { nombre, precio, id } = producto; //Se extraen los valores para manipularlos mas facil

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>$ {precio}</p>            
        </div>

     );
}
 
export default Producto;