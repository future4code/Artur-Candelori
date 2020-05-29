import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 600px;
  height: 600px;
  background-color: white;
`

function HomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push(`/login`)
  }
  const goToApplicationForm = () => {
    history.push(`/application-form`)
  }

  return (
    <Container>
      HomePage
      <Main>
        <button  onClick={goToLoginPage}>Login</button>
        <button onClick={goToApplicationForm}>ApplicationPage</button>
      </Main>
    </Container>
  );
}

export default HomePage;