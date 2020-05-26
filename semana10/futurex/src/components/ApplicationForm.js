import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

function ApplicationForm() {
  const [name, onChangeName, setName] = useInputValue()
  const [age, onChangeAge, setAge] = useInputValue()
  const [text, onChangeText, setText] = useInputValue()
  const [profession, onChangeProfession, setProfession] = useInputValue()
  const [country, setCountry] = useState("Brasil")
  const [tripId, setTripId] = useState("")
  const [trips, setTrips] = useState([]) //só p/ teste, botar como props depois

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

  const body = {
    "name": name,
    "age": age,
    "applicationText": text,
    "profession": profession,
    "country": country
  }
  
  const applyToTrip = (id) => {
    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips/${id}/apply`, body).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onChangeCountry = event => {
    setCountry(event.target.value)
  }

  const onChangeTrip = event => {
    setTripId(event.targe.value)
  }

  const onClickEnviar = () => {
    console.log(name, age, text, profession, country, tripId)
    console.log(body)

    if (age >= 18) {
      applyToTrip(tripId)
    } else {
      console.log("É preciso ter ao menos 18 anos para se candidatar.")
    }
    
    setName("")
    setAge("")
    setText("")
    setProfession("")
    setCountry("Brasil")
    setTripId("1")
  }

  return (
    <Container>
      ApplicationForm
      <Main>
        <input placeholder="Nome" value={name} onChange={onChangeName}/>
        <input placeholder="Idade" type="number" value={age} onChange={onChangeAge}/>
        <textarea placeholder="Texto do candidato" value={text} onChange={onChangeText}/>
        <input placeholder="Profissão" value={profession} onChange={onChangeProfession}/>
        <select value={country} onChange={onChangeCountry}>
          <option value="Brasil">Brasil</option>
        </select>
        <select value={tripId} onChange={onChangeTrip}>
          {trips.map(trip => <option value={trip.id}>{trip.name}</option>)}
        </select>
        <button onClick={onClickEnviar}>Enviar</button>
      </Main>
    </Container>
  );
}

export default ApplicationForm;