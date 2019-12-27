// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

import signUpConfig from './config/signUpConfig'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'

import './App.css'

//RL 

import { Auth } from 'aws-amplify';


Auth.currentAuthenticatedUser()
     .then(user => console.log(user))
     .catch(err => console.log(err))

function App() {
    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}></Header>
                <Header as='h1' style={{ textAlign: 'center' }}>Welcome to Bottle O Li Zan Wine Shop</Header>
            </Container>
            <Container fluid>
                <Carousel />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>White Wines displays</Header>
                <p>Everything you love about White Wines.</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='echo' />
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <Header as='h2'>Red Wines displays</Header>
                <p>Everything you love about RED Wines.</p>
            </Container>
            <Container style={{ marginTop: '2em' }}>
                <ItemTable type='companion' />
            </Container>
        </div>
    );
}

export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}