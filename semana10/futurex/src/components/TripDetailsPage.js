import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage'

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

function TripDetailsPage() {
  useProtectedPage()

  const [trip, setTrip] = useState({
    "id": "NoIFVcOiSgTKTIPVZwXS",
    "planet": "Mercúrio",
    "durationInDays": 7,
    "date": "31/12/2019",
    "name": "Ano novo em Mercúrio",
    "description": "Venha passar a virada pertinho do Sol!",
    "candidates": [
      {
        "id": "NAOp5L3Wuunexq9SbUso",
        "applicationText": "Quero muuuuuuito ir!!!",
        "profession": "Chefe",
        "age": 20,
        "name": "Astrodev",
        "country": "Brasil"
      }
    ]
  })

  const getTrip = (id) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trip/${id}`).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <Container>
      TripDetailsPage
      <Main>

      </Main>
    </Container>
  );
}

export default TripDetailsPage;