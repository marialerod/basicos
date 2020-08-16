import React, {Fragment,useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  //Obtener año actual
  const fecha = new Date().getFullYear();

  //Lista de Productos
  const [productos, guardarProductos] = useState ([
    { id:1, nombre: 'Galletas Choco-Chips', precio: 2 },
    { id:2, nombre: 'Galletas de Limon', precio: 1 },
    { id:3, nombre: 'Chocoflan', precio: 6 },
    { id:4, nombre: 'Tres Leches', precio: 5 },
  ]);

  //Carrito de Compras
  const [carrito, agregarProducto] = useState([]); //Se crea vacio para ser llenado mediante el boton de compra

  return (
    <Fragment>
      <Header
        titulo = 'Bienvenido a mi tiendita virtual'
      />
      <h2>Lista de Postres</h2>
      {productos.map(producto => (
        <Producto
          key = {producto.id} //Cada elemento de una coleccion debe tener un key que lo haga unico
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        />
      ))}
      <Footer
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
