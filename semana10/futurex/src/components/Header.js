import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import logoA from '../futurex-smallA.png'
import logoB from '../futurex-smallB.png'

function Header() {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <img src={logoB}/>
                    <img src={logoA}/>
                    "Encontre as Melhores Viagens!"
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header