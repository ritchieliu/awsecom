

import React, { useContext } from 'react'
import { Icon, Image, Input, Menu, Button } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext'

//RL add
import { Auth } from 'aws-amplify'
 

function About() {
    const {user, cart} = useContext(AppContext)
    //RL add
   //const {user} = this.currentAuthenticatedUser


    //function getAtt(name) {
     //   return user ? user[name] : "Guest"
    //}

    //RL add    + {getAtt('given_name')}
    return (
        <div style={divStyle}>
            <menuStyle>This is about page.</menuStyle>
        </div>
    )
}

export default About

const menuStyle = {
	background: '#232f3e'
}

const divStyle = {
	paddingTop: '6em'
}

const cartStyle = {
    marginRight: '1em'
}
