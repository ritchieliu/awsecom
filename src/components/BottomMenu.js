

import React, { useContext } from 'react'
import { Icon, Image, Input, Menu, Button , Label} from 'semantic-ui-react'
import { Link } from "react-router-dom";
import AppContext from '../context/AppContext'

//RL add
import { Auth } from 'aws-amplify'

//var userat = Auth.userAttributes(user)
//RL add   

function BottomMenu() {
    return (
        <div style={divStyle}>
            <Menu fixed='bottom' stackable borderless inverted style={menuStyle}>
                <Menu.Item>
                    <Icon loading name='spinner' />
                    <Label>
                        <Icon name='mail' /> Email US
                    </Label>
                </Menu.Item>
                <Menu.Item>                       
                    <Icon loading name='certificate' />
                    <Label>
                        <Icon name='mail' /> About
                    </Label>
                </Menu.Item>
                <Menu.Item>                       
                    <Icon loading name='asterisk' />
                    <Label>
                        <Icon name='envelope outline' /> Contact
                    </Label>
                </Menu.Item>
                <Menu.Item>
                    <Icon name='twitter' />
                    <Icon corner name='add' />
                    on twitter    
                </Menu.Item>
                Copy Right@Bottle O Li Zan
            </Menu>
        </div>
    )
}

export default BottomMenu

const menuStyle = {
	background: '#ffffff'
}

const divStyle = {
	paddingBottom: '6em'
}

const cartStyle = {
    marginRight: '1em'
}
