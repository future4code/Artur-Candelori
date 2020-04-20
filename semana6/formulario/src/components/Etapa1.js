import React from 'react';
//import './Etapa1.css';

function Etapa1() {
  return (
    <div className="Etapa1">
      <h1>ETAPA 1 - DADOS GERAIS</h1>
      <p>1. Qual o seu nome?</p>
      <input />
      <p>2. Qual sua idade?</p>
      <input />
      <p>3. Qual seu email?</p>
      <input />
      <p>4. Qual a sua escolaridade?</p>
      <select>
          <option value="">Ensino Médio Incompleto</option>
          <option value="">Ensino Médio Completo</option>
          <option value="">Ensino Superior Incompleto</option>
          <option value="">Ensino Superior Completo</option>
      </select>
    </div>
  );
}

export default Etapa1;