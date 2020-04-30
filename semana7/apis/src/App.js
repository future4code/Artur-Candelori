import React from "react";
import axios from 'axios';
//import styled from "styled-components";
import "./App.css"

class App extends React.Component {
  state = {
    atividade: {},
    tipo: 'education',
    participantes: '' 
  }

  escolheTipo = (event) => {
    this.setState({tipo: event.target.value})
  }

  getRandom = () => {
    axios.get('https://www.boredapi.com/api/activity/').then(response => {
      this.setState({atividade: response.data})
    }).catch(error => {
      console.log(error)
    })
  }

  getType = () => {
    axios.get(`https://www.boredapi.com/api/activity?type=${this.state.tipo}`).then(response => {
      this.setState({atividade: response.data})
      console.log(this.state.atividade)
    }).catch(error => {
      console.log(error)
    })
  }

  mudaParticipantes = (event) => {
    this.setState({participantes: event.target.value})
  }

  getParticipants = () => {
    axios.get(`http://www.boredapi.com/api/activity?participants=${this.state.participantes}`).then(response => {
      this.setState({atividade: response.data})
      this.setState({participantes: ''})
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
    <div className="App">

      <h2>Por tipo:</h2>
      <select onChange={this.escolheTipo}>
        <option value="education">Educação</option>
        <option value="recreational">Recreação</option>
        <option value="social">Social</option>
        <option value="diy">Diy</option>
        <option value="charity">Caridade</option>
        <option value="cooking">Cozinha</option>
        <option value="relaxation">P/ relaxar</option>
        <option value="music">Música</option>
        <option value="busywork">Tarefas</option>
        <option value="random">Qualquer um</option>
      </select>
      <button onClick={this.state.tipo === 'random' ? this.getRandom : this.getType}>Nova Atividade</button>

      <h2>Por número de participantes (até 5):</h2>
      <input placeholder='Nº de participantes' onChange={this.mudaParticipantes} value={this.state.participantes}/>
      <button onClick={this.getParticipants}>Nova Atividade</button>
              
      <p><strong>Atividade:</strong> {this.state.atividade.activity}</p>
      <p><strong>Acessiblidade:</strong> {this.state.atividade.accessibility}</p>
      <p><strong>Tipo:</strong> {this.state.atividade.type}</p>
      <p><strong>Participantes:</strong> {this.state.atividade.participants}</p>
      <p><strong>Preço:</strong> {this.state.atividade.price}</p>
      <p><strong>Link:</strong> {this.state.atividade.link}</p>
      
    </div>
    );
  }  
}

export default App