// Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { useContext } from 'react'
import { Icon, Image, Input, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext'

//RL add
import { Auth } from 'aws-amplify'


function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err))
}

function signOut() {
	console.log("user sign out!")
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

//var userat = Auth.userAttributes(user)
//RL add

function TopMenu() {
    const {cart} = useContext(AppContext)

    return (
        <div style={divStyle}>
            <Menu fixed='top' stackable borderless inverted style={menuStyle}>
                <Menu.Item header>
                    <Link to='/'>
    <Image src='/images/store-logo.svg' style={{ marginRight: '1.5em', marginLeft: '4em' }} /> Welcome
                    </Link>
                </Menu.Item>
                <Menu.Menu>
                    <Menu.Item>
                        <Input icon={<Icon name='search' 
                                           link color='yellow' 
                                           bordered 
                                           inverted />} placeholder='Search...' 
                                                        style={{ width: '40em' }} />
                    </Menu.Item>
                </Menu.Menu>
                <Menu.Item position='right'>
                    <Link to={'/Checkout'}>
                        <Button
                            color='yellow'
                            icon='cart'
                            label={cart.items.length}
                            labelPosition='right'
                            style={cartStyle}
                        />
                    </Link>
	                
                        <Button color='blue' onClick={signOut}>Sign Out
	                    </Button>
                       
                    <Link to={'/PlacedOrder'}>
                         <Button color='blue'>Pleaced Order
	                    </Button>
                    </Link>

                </Menu.Item>
            </Menu>
        </div>
    )
}

export default TopMenu

const menuStyle = {
	background: '#232f3e'
}

const divStyle = {
	paddingTop: '6em'
}

const cartStyle = {
    marginRight: '1em'
}
