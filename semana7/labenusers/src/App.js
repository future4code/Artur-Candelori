import React from 'react';
import axios from 'axios'
import {Cadastro} from './components/TelaCadastro';
import {Lista} from './components/TelaLista';

class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
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
      <button onClick={this.onClickMudaPagina}>Mudar</button>
      <br/><br/>
      {this.state.telaAtual === 'cadastro' ?
      <Cadastro /> :
      <Lista />}
    </div>
    );
  }
}

export default App;
