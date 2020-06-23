import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios' 

function App() {
  const [tarefas, setTarefas] = useState([])
  const [inputValue, setInputValue] = useState("")
  const [dia, setDia] = useState("seg")

  const getTarefas = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori').then(response => {
      setTarefas(response.data)
    })
  }
  
  useEffect(() => {
    getTarefas()
  }, [])

  const handleInput = event => {
    setInputValue(event.target.value)
  }

  const handleButton = () => {
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-artur-candelori', {
      text: inputValue,
      day: dia
    }).then(response => {
      setInputValue("")
      getTarefas()
    })
  }

  const handleSelect = event => {
    setDia(event.target.value)
  }

  const segunda = tarefas.filter(tarefa => {
    return tarefa.day === "seg";
  });
  const terca = tarefas.filter(tarefa => {
    return tarefa.day === "ter";
  });
  const quarta = tarefas.filter(tarefa => {
    return tarefa.day === "qua";
  });
  const quinta = tarefas.filter(tarefa => {
    return tarefa.day === "qui";
  });
  const sexta = tarefas.filter(tarefa => {
    return tarefa.day === "sex";
  });
  const sabado = tarefas.filter(tarefa => {
    return tarefa.day === "sab";
  });
  const domingo = tarefas.filter(tarefa => {
    return tarefa.day === "dom";
  });

  return (
    <div className="App">
      <h1>Planner</h1>
      <label htmlFor="dia">Selecione o dia: </label>
      <select 
        id="dia" 
        value={dia} 
        onChange={handleSelect}
      >
        <option value="seg" data-testid="seg">Segunda</option>
        <option value="ter" data-testid="ter">Terça</option>
        <option value="qua" data-testid="qua">Quarta</option>
        <option value="qui" data-testid="qui">Quinta</option>
        <option value="sex" data-testid="sex">Sexta</option>
        <option value="sab" data-testid="sab">Sábado</option>
        <option value="dom" data-testid="dom">Domingo</option>
      </select>
      <br />
      <input placeholder="Nova tarefa" 
        value={inputValue} 
        onChange={handleInput}
      />
      <button onClick={handleButton}>Adicionar</button>

      <p>Segunda</p>
      <ul>
        {segunda.map(tarefa => <li data-testid="teste seg">{tarefa.text}</li>)}
      </ul>
      
      <p>Terça</p>
      <ul>
        {terca.map(tarefa => <li data-testid="teste ter">{tarefa.text}</li>)}
      </ul>
      
      <p>Quarta</p>
      <ul>
        {quarta.map(tarefa => <li data-testid="teste qua">{tarefa.text}</li>)}
      </ul>
      
      <p>Quinta</p>
      <ul>
        {quinta.map(tarefa => <li data-testid="teste qui">{tarefa.text}</li>)}
      </ul>
      
      <p>Sexta</p>
      <ul>
        {sexta.map(tarefa => <li data-testid="teste sex">{tarefa.text}</li>)}
      </ul>
      
      <p>Sábado</p>
      <ul>
        {sabado.map(tarefa => <li data-testid="teste sab">{tarefa.text}</li>)}
      </ul>
      
      <p>Domingo</p>
      <ul>
        {domingo.map(tarefa => <li data-testid="teste dom">{tarefa.text}</li>)}
      </ul>
    </div>
  );
}

export default App;
