import React from 'react';

import {Cadastro} from './components/TelaCadastro';
import {Lista} from './components/TelaLista';

function App() {
  return (
    <div>
      <button>Mudar</button>
      <br/><br/>
      <Cadastro />
      <Lista />
    </div>
  );
}

export default App;
