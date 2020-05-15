import React from 'react'
import styled from 'styled-components'

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    border-bottom: 1px solid black;
`
const Title = styled.div`
    display: flex;
`
function Header(props) {
    return (
        <Container>
            {props.CurrentPage === 'profile' ? <div></div> : <Button onClick={props.OnClickMudar}>Mudar</Button>}
            <Title>
                <Typography variant="h5" color="primary">Astro</Typography><Typography variant="h5" color="secondary">Match</Typography>
            </Title>
            {props.CurrentPage === 'profile' ? <Button onClick={props.OnClickMudar}>Mudar</Button> : <div></div>}
        </Container>
    )
}

export default Header