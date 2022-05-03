import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import './bootstrap.css';

function App() {
  const [contador, updEstado] = useState(0);
  const updateEstado = ()=>{
    try {
      updEstado(contador+1);
    } catch (error) {
      console.log(error);
    }
  }
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Contador {contador}
        </p>
        <button className='btn btn-primary' onClick={updateEstado}>Incrementar </button>
      </header>
    </div>
  );
}

export default App;
