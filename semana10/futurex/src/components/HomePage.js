import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import { useInputValue } from '../hooks/useInputValue'

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
`

function HomePage() {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push(`/login`)
  }
  /* const goToApplicationForm = () => {
    history.push(`/application-form`)
  }
  const goToCreateListPage = () => {
    history.push(`/trips/create`)
  }
  const goToListTripsPage = () => {
    history.push(`/trips/list`)
  }
  const goToTripDetailsPage = () => {
    history.push(`/trips/details`)
  } */

  return (
    <Container>
      HomePage
      <Main>
        <button  onClick={goToLoginPage}>Login</button>
        <button>Cadastro</button>
      </Main>
      {/* <button onClick={goToApplicationForm}>ApplicationForm</button>
      <button onClick={goToCreateListPage}>CreateListPage</button>
      <button onClick={goToListTripsPage}>ListTripsPage</button>
      <button onClick={goToTripDetailsPage}>TripDetailsPage</button> */}
    </Container>
  );
}

export default HomePage;