import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MatchContainer = styled.div`
    display: flex;

`
const Foto = styled.img`
    width: 50px;
    height: 50px;
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
        <div>
            {matchList.map(match => {
                return (
                    <MatchContainer>
                        <Foto src={match.photo}/>
                        <p>{match.name}</p>
                    </MatchContainer>
                )
            })}
        </div>
    )
}

export default MatchList