import React from 'react';
import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

class App extends React.Component {
  state = {
    etapa: 1 
  };

  renderizaEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break;
      case 2:
        return <Etapa2 />;
        break;
      case 3:
        return <Etapa3 />;
        break;
      case 4:
        return <Final />;
        break;
      default:
        return <div></div>;        
    }
  }

  irParaProximaEtapa = () => {
    let valorEtapa = this.state.etapa;
    valorEtapa++
    this.setState({etapa: valorEtapa})
  }

  render() {
    return (
      <div className="App">
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>
      </div>
    );
  }
}

export default App;
