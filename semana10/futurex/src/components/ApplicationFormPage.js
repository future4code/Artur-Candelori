import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {CountryDropdown} from './CountryDropdown';
import { useForm } from '../hooks/useForm';

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

function ApplicationFormPage() {
  const {form, onChange, resetForm} = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    tripId: "",
    trips: ""
  })

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const [trips, setTrips] = useState([])

  const getTrips = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips").then(response => {
      console.log(response)
      setTrips(response.data.trips)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getTrips()
  }, [])

  const body = form
  
  const applyToTrip = (id) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips/${id}/apply`, body).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onClickEnviar = () => {
    applyToTrip(form.tripId)
    resetForm()
  }

  return (
    <Container>
      <Main>
        ApplicationForm
        <input 
          name="name" 
          placeholder="Nome" 
          type ="text" 
          value={form.name} 
          onChange={handleInputChange}
        />
        <input 
          name="age"
          placeholder="Idade" 
          type="number" 
          value={form.age} 
          onChange={handleInputChange}
        />
        <textarea 
          name="applicationText" 
          placeholder='"Por que sou um bom candidato?"' 
          value={form.applicationText} 
          onChange={handleInputChange}
        />
        <input
          name="profession" 
          placeholder="Profissão" 
          value={form.profession} 
          onChange={handleInputChange}
        />
        <CountryDropdown 
          Value={form.country} 
          OnChange={handleInputChange} 
        />
        <select 
          value={form.tripId} 
          onChange={handleInputChange}>
          {trips.map(trip => <option value={trip.id}>{trip.name}</option>)}
        </select>
        <button onClick={onClickEnviar}>Enviar</button>
      </Main>
    </Container>
  );
}

export default ApplicationFormPage;