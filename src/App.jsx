import React, { Fragment } from 'react';
import './App.css';
import Prop from './components/Prop';
import State from './components/State'

function App() {
  return (//un fragment es un componente que no se renderiza
    //se debe englobar con un elemento raiz, siempre para todo componente y el App es un componente tambien
    <Fragment>
      <Prop title="Hola nueva vida como Padre!"/>
      
      <State />

    </Fragment>
    
  );
}

export default App;
