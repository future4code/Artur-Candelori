import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, } from 'react-router-dom';
import { useProtectedPage } from '../hooks/useProtectedPage';

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
  width: 80%;
  height: 90%;
  background-color: white;
  overflow: scroll;
`
 
function ListTripsPage() {
  useProtectedPage()

  const [trips, setTrips] = useState([])

  const history = useHistory();

  const goToTripDetailsPage = (id)  => {
    history.push(`/trips/details/${id}`)
  }
  const goToCreateListPage = () => {
    history.push(`/trips/create`)
  }
  
  useEffect(() => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips').then(response => {
      setTrips(response.data.trips)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <Container>
      <button onClick={goToCreateListPage}>CreateTripPage</button>
      <Main>
        ListTripsPage
        {trips.map(trip =>{
          return (
            <div>
              <h4>{trip.name}</h4>
              <p>{trip.planet}, {trip.date}</p>
              <button onClick={() => goToTripDetailsPage(trip.id)}>Detalhes</button>
            </div>
          )
        })}
      </Main>
    </Container>
  );
}

export default ListTripsPage;