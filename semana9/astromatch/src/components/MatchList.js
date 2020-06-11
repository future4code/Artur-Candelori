import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
    margin-top: 16px;
`
const MatchContainer = styled.div`
    display: flex;
    margin-left: 16px;
    margin-bottom: 12px;
`
const Foto = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 12px;
    border-radius: 50%;
`

function MatchList() {
    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/artur-candelori-julian/matches").then(response => {
            setMatchList(response.data.matches)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getMatches()
    }, [matchList])

    return (
        <Container>
            {matchList.map(match => {
                return (
                    <MatchContainer>
                        <Foto src={match.photo}/>
                        <p>{match.name}</p>
                    </MatchContainer>
                )
            })}
        </Container>
    )
}

export default MatchList