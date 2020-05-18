import React from 'react'
import styled from 'styled-components'

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import PeopleAlt from "@material-ui/icons/PeopleAlt";

import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    border-bottom: 1px solid lightgray;
`
const Title = styled.div`
    display: flex;
    text-align: center;
`
function Header(props) {
    return (
        <Container>
            {props.CurrentPage === 'profile' ? <div></div> : <IconButton onClick={props.OnClickMudar} color="primary"><PeopleAlt/></IconButton>}
            <Title>
                <Typography variant="h5" color="primary">Astro</Typography><Typography variant="h5" color="secondary">Match</Typography>
            </Title>
            {props.CurrentPage === 'profile' ? <IconButton onClick={props.OnClickMudar} color="secondary"><PeopleAlt/></IconButton> : <div></div>}
        </Container>
    )
}

export default Header