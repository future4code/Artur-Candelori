import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

import Header from './components/Header'
import MatchList from './components/MatchList'
import ProfileCard from './components/ProfileCard'

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`
const CardContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 400px;
  border: 1px solid black;
  border-radius: 3px;
`

function App() {
  const [currentPage, setCurrentPage] = useState('profile')
  const [profile, setProfile] = useState({})

  const mudaPagina = () => {
    currentPage === 'profile' ? setCurrentPage('list') : setCurrentPage('profile') 
  }

  const getProfileToChoose = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/artur-candelori-julian/person").then(response => {
      setProfile(response.data.profile)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getProfileToChoose()
  }, [])

  return (
    <MainContainer>
      <CardContainer>
        <Header OnClickMudar={() => mudaPagina()} CurrentPage={currentPage}/>
    
        {currentPage === 'profile' ? <ProfileCard Profile={profile} GetProfile={getProfileToChoose}/> : <MatchList/>}
      </CardContainer>
    </MainContainer>
  );
}

export default App;
