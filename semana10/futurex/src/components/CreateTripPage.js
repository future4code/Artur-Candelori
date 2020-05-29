import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useProtectedPage } from '../hooks/useProtectedPage'
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

function CreateTripPage() {
  useProtectedPage()

  const {form, onChange, resetForm} = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: ""
  })

  const handleInputChange = event => {
    const {name, value} = event.target

    onChange(name, value)
  }

  const body = form
  
  const createTrip = () => {
    const token = localStorage.getItem('token')

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/trips", body, {
      headers: {
        'Content-Type': 'application/json',
        auth: token
      }
    }).then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const onClickEnviar = () => {
    createTrip()
    resetForm()
  }

  return (
    <Container>
      <Main>
        CreateTripPage
        <form>
          <input 
            name="name" 
            placeholder="name" 
            type="text" 
            value={form.name} 
            onChange={handleInputChange}
          />
          <select name="planet" value={form.planet} onChange={handleInputChange}>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
          </select>
          <input 
            name="date" 
            placeholder="date" 
            type="date" 
            value={form.date} 
            onChange={handleInputChange}
          />
          <textarea 
            name="description" 
            placeholder="description" 
            value={form.description} 
            onChange={handleInputChange}
          />
          <input 
            name="durationInDays" 
            placeholder="duration" 
            type="number" 
            value={form.durationInDays} 
            onChange={handleInputChange}
          />
          <button onClick={onClickEnviar}>Enviar</button>
        </form>
        
      </Main>
    </Container>
  );
}

export default CreateTripPage;