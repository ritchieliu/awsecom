

import React, { useContext } from 'react'
import { Icon, Image, Input, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext'

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

//var userat = Auth.userAttributes(user)
//RL add   

function TopMenu() {
    const {user, cart} = useContext(AppContext)
    //RL add
   //const {user} = this.currentAuthenticatedUser


    //function getAtt(name) {
     //   return user ? user[name] : "Guest"
    //}

    //RL add    + {getAtt('given_name')}
    return (
        <div style={divStyle}>
            <Menu fixed='top' stackable borderless inverted style={menuStyle}>
                <Menu.Item header>
                    <Link to='/'>
    <Image src='/images/store-logo.svg' style={{ marginRight: '1.5em', marginLeft: '4em' }} />
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

                </Menu.Item>
            </Menu>
        </div>
    )
}

export default TopMenu

const menuStyle = {
	background: '#ffffff'
}

const divStyle = {
	paddingTop: '6em'
}

const cartStyle = {
    marginRight: '1em'
}


//background: '#232f3e'
//<Link to={'/ordercomplete'}>
//<Button color='blue'>Check Out
//</Button>
//</Link>