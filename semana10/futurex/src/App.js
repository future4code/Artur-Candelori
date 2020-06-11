import React from 'react';
import Router from './components/Router'
import Header from './components/Header'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const Container = styled.div`
  background-color: #ff5f00;
`

function App() {
  const history = useHistory();

  const goToHomePage = () => {
    history.push(`/`)
  }

  return (
    <Container>
      <Header/>
      <Router/>
      <button onClick={goToHomePage}>Home</button>
    </Container>
  );
}

export default App;
