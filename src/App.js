
import './App.css';
import freeCodeCamp from './imagenes/freecodecamp-logo.png';
import Button from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manageClic = () => {

    setNumClics(numClics + 1);

  }

  const restartCounter = () => {

    setNumClics(0);


  }
  return (
    <div className="App">

      <div className='freecodecamp-logo-contenedor'>

        <img className='freecodecamp-logo'
          src={freeCodeCamp}
          alt='Logo de freeCodeCamp' />

      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Button
          text='Clic'
          isClicButton={true}
          manageClic={manageClic} />

        <Button
          text='Restart'
          isClicButton={false}
          manageClic={restartCounter} />

      </div>


    </div>
  );
}

export default App;
