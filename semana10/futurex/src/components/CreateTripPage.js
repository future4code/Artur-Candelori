import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage'

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

function CreateTripPage() {
  useProtectedPage()

  const [name, onChangeName, setName] = useInputValue()
  const [planet, setPlanet] = useState("Mercúrio")
  const [date, onChangeDate, setDate] = useInputValue()
  const [description, onChangeDescription, setDescription] = useInputValue()
  const [duration, onChangeDuration, setDuration] = useInputValue()

  const body = {
    "name": name,
    "planet": planet,
    "date": date,
    "description": description,
    "durationInDays": duration
  }
  
  const createTrip = () => {
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips", body).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onChangePlanet = event => {
    setPlanet(event.target.value)
  }

  const onClickEnviar = () => {
    console.log(name, planet, date, description, duration)
    console.log(body)
    setName("")
    setPlanet("Mercúrio")
    setDate("")
    setDescription("")
    setDuration("")
    // createTrip()
  }

  return (
    <Container>
      CreateTripPage
      <Main>
        <input placeholder="name" type="text" value={name} onChange={onChangeName}></input>
        <select value={planet} onChange={onChangePlanet}>
          <option value="Mercúrio">Mercúrio</option>
          <option value="Vênus">Vênus</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Júpiter">Júpiter</option>
          <option value="Saturno">Saturno</option>
          <option value="Urano">Urano</option>
          <option value="Netuno">Netuno</option>
        </select>
        <input placeholder="date" type="date" value={date} onChange={onChangeDate}></input>
        <textarea placeholder="description" value={description} onChange={onChangeDescription}></textarea>
        <input placeholder="duration" type="number" value={duration} onChange={onChangeDuration}></input>
        <button onClick={onClickEnviar}>Enviar</button>
      </Main>
    </Container>
  );
}

export default CreateTripPage;