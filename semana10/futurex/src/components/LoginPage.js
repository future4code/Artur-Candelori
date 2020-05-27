import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import axios from 'axios';

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

function LoginPage() {
  const history = useHistory()

  const { form, onChange } = useForm({ email: "", password: "" })

  const handleInputChange = event => {
    const {name, value} = event.target;

    onChange(name, value);
  }

  const handleLogin = async () => {
    const body = {
      "email": form.email,
      "password": form.password
    }
    
    try {
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/login`, body)

      localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    } catch (error) {
      console.log(body)
      console.log(error)
      alert("Erro!")
    }
  }

  return (
    <Container>
      LoginPage
      <Main>
        <form>
          <input
            name="email" 
            value={form.email} 
            type="text" 
            placeholder="E-mail"
            onChange={handleInputChange}
          />
          <input 
            name="password"
            value={form.password} 
            type="password" 
            placeholder="Senha" 
            onChange={handleInputChange}
          />
          <button onClick={handleLogin}>Login</button>
        </form>
      </Main>
    </Container>
  );
}

export default LoginPage;