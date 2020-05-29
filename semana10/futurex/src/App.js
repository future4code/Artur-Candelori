import React from 'react';
import Router from './components/Router'
import Header from './components/Header'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #ff5f00;
`

function App() {
  return (
    <Container>
      <Header/>
      <Router/>
      <button >Home</button>
    </Container>
  );
}

export default App;
