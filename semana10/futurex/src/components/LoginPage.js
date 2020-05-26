import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useInputValue } from '../hooks/useInputValue';
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

  const [email, onChangeEmail] = useInputValue()
  const [password, onChangePassword] = useInputValue()

  const handleLogin = async () => {
    const body = {
      "email": email,
      "password": password
    }
    
    try {
      const response = await axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/artur-candelori-julian/login`, body)

      localStorage.setItem("token", response.data.token)
      history.push("/trips/list")
    } catch (error) {
      console.log(error)
      alert("Erro!")
    }
  }

  

  return (
    <Container>
      LoginPage
      <Main>
        <input placeholder="email" value={email} onChange={onChangeEmail}></input>
        <input placeholder="password" value={password} onChange={onChangePassword}></input>
        <button onClick={handleLogin}>Login</button>
      </Main>
    </Container>
  );
}

export default LoginPage;