import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios' 

function App() {


  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori')
  }, [])

  return (
    <div className="App">
      <h1>Planner</h1>
      <label htmlFor="dia">Selecione o dia: </label>
      <select id="dia" >
        <option value="seg">Segunda</option>
        <option value="ter">Terça</option>
        <option value="qua">Quarta</option>
        <option value="qui">Quinta</option>
        <option value="sex">Sexta</option>
        <option value="sab">Sábado</option>
        <option value="dom">Domingo</option>
      </select>
      <br />
      <input placeholder="Nova tarefa"/>
      <button>Adicionar</button>
    </div>
  );
}

export default App;
