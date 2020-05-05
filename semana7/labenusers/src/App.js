import React from 'react';
import axios from 'axios'
import {Cadastro} from './components/TelaCadastro';
import {Lista} from './components/TelaLista';

class App extends React.Component {
  state = {
    paginaAtual: 'cadastro'
  }

  onClickMudaPagina = () => {
    let proximaPagina = ''
    if(this.state.paginaAtual === 'cadastro') {
      proximaPagina = 'lista'
    } else {
      proximaPagina = 'cadastro'
    }

    this.setState({paginaAtual: proximaPagina})
  }

  render() {
    return (
    <div>
      <button onClick={this.onClickMudaPagina}>
        {this.state.paginaAtual === 'cadastro' ? 'Ir para a lista de usuários' : 'Ir para a página de cadastro'}
      </button>
      <br/><br/>
      {this.state.paginaAtual === 'cadastro' ? <Cadastro /> : <Lista />}
    </div>
    );
  }
}

export default App;
