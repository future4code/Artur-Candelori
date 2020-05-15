import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
`
const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 90%;    
`
const Foto = styled.img`
    height: 300px;
    width: 200px;
`
const Botoes = styled.div`
    display: flex;
    justify-content: space-around;
`

const ProfileCard = (props) => {
    
    const onClickLike = () => {
        const body = {
            "id": profile.id,
            "choice": true
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/artur-candelori-julian/choose-person", body).then(response => {
            if (response.data.isMatch === true) {
                window.alert("Deu match!")
            }
            props.GetProfile()
        })
        .catch(error => {
            console.log(error)
        })
    }

    const onClickDislike = () => {
        const body = {
            "id": profile.id,
            "choice": false 
        }
        axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/artur-candelori-julian/choose-person", body).then(response => {
            props.GetProfile()
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    const clear = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/artur-candelori-julian/clear').then(response => {
          console.log(response)
          window.alert("Matches apagados com sucesso")
        })
        .catch(error => {
          console.log(error)
        })
    }

    const profile = props.Profile

    return (
        <Container>
            <Perfil>
                <Foto src={profile.photo}/>
                <Typography variant="h6">{profile.name}, {profile.age}</Typography>
                <Typography variant="body1">{profile.bio}</Typography>
            </Perfil>

            <Botoes>
                <IconButton onClick={onClickDislike} color="secondary">
                    <CloseIcon/>
                </IconButton>

                <Button onClick={clear}>Limpar matches</Button>

                <IconButton onClick={onClickLike} color="primary">
                    <FavoriteIcon/>
                </IconButton>
            </Botoes>
        </Container>
    )
}

export default ProfileCard