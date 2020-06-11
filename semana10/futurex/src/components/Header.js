import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import logoA from '../futurex-smallA.png'
import logoB from '../futurex-smallB.png'

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
    background-color: white;
`

function Header() {
    return (
        <Container>
            <img src={logoB}/>
            <img src={logoA}/>        
        </Container>
    )
}

export default Header