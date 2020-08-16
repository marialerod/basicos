import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  //Obtener año actual
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header
        titulo = 'Bienvenido a mi tiendita virtual'
      />
      <Footer
        fecha = {fecha}
      />
    </Fragment>
  );
}

export default App;
