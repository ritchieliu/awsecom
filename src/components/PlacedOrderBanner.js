

import React from 'react'
import {Link} from 'react-router-dom'
import { Grid, Header, Image, Button} from 'semantic-ui-react'
import styled from 'styled-components'

//RL add
import { Auth } from 'aws-amplify'


function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user}))
    .catch(err => console.log(err))
}

function signOut() {
	console.log("user sign out!")
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

function PlacedOrderBanner(props) {
    return (    
        <Grid columns={3} style={topBanner}>
            <Grid.Row>
                <Grid.Column width={2}>
                    <Link to='/'>
                        <Image src='/images/store-logo-2.png' style={logoStyle} />
                    </Link>
                </Grid.Column>
                <Grid.Column width={12} verticalAlign='middle' textAlign='center' style={headerStyle}>
                    <Header as='h1' textAlign='center'>Placed Order (<QuantityText>{props.quantity}</QuantityText>)</Header>
                </Grid.Column>
                <Grid.Column width={2} verticalAlign='right'>
                        <Button color='blue' Align='center' onClick={signOut}>Sign Out
	                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default PlacedOrderBanner

const topBanner = {
    background: 'url(/images/header-bkg.png)',
    borderColor: '#DDD',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    height: '73px'
}

const logoStyle = {
    marginRight: '1.5em', 
    marginLeft: '4em', 
    marginTop: '5px'
}

const headerStyle = {
    marginTop: '5px'
}

const QuantityText = styled.a`
  font-size: 12pt;
  vertical-align: middle;
`