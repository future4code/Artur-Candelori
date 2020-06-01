import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage';
import { useParams } from 'react-router-dom';

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

function TripDetailsPage() {
  useProtectedPage()

  const pathParams = useParams()

  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])

  const getTripDetail = async (tripId) => {
    const token = localStorage.getItem('token')

    try {
      const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trip/${tripId}`, {
        headers: {
          auth: token
        }
      })
      setTrip(response.data.trip)
      setCandidates(response.data.trip.candidates)
    } catch (error) {
      console.log(error)
    }
  }

  const decideCandidate = async (tripId, candidateId, approve) => {
    const token = localStorage.getItem('token')

    const body = {
      "approve": approve
    }

    try {
      const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips/${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
          'Content-Type': 'application/json',
          auth: token
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    getTripDetail(pathParams.id)
  }, [])

  return (
    <Container>
      <Main>
        TripDetailsPage
        <p>{trip.name}</p>
        <p>{trip.date}</p>
        <p>{trip.planet}</p>
        <p>{trip.description}</p>
        {candidates.map(candidate => {
          return(
            <div>
              <ul>
                <li>{candidate.name}</li>
                <li>{candidate.age}</li>
                <li>{candidate.country}</li>
                <li>{candidate.profession}</li>
                <li>{candidate.applicationText}</li>
              </ul>
              <button onClick={() => decideCandidate(trip.id, candidate.id, true)}>Aprovar</button>
              <button onClick={() => decideCandidate(trip.id, candidate.id, false)}>Reprovar</button>
            </div>
          )
        })}
        {/* {approved.map(candidate => <p>{candidate.name}</p>)} */}
        <button onClick={() => console.log(trip.approved)}>Aprovados</button>
      </Main>
    </Container>
  );
}

export default TripDetailsPage