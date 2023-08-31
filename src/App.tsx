import React from 'react';
import './assets/css/App.css';
import { Main } from './components/Main';

function App() {
  return (
    <div className="App">
      <nav>
        <h3>Calculadora de Tasa Metabólica Basal</h3>
      </nav>
      <Main />
    </div>
  );
}

export default App;
