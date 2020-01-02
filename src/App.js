//  Home Page

//This the home page entry point secure sites

import React,{useContext, useState} from 'react'
import { Container, Header, Embed} from 'semantic-ui-react'
import { withAuthenticator } from 'aws-amplify-react'

import signUpConfig from './config/signUpConfig'

import InitState from './pages/InitState'
import TopMenu from './components/TopMenu'
import Carousel from './components/Carousel'
import ItemTable from './components/ItemTable'

import BottomMenu from './components/BottomMenu'

import './App.css'

//RL 
import { Auth } from 'aws-amplify';
import AppContext from './context/AppContext'


const EmbedExampleYouTube = () => (

  <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
  />
)

Auth.currentAuthenticatedUser()
     .then(user => console.log(user))
     .catch(err => console.log(err))

function App() {
    var {user, cart, items, clearCart} = useContext(AppContext)
    function getAtt(name) {
        return user ? user[name] : ""
    }
    
    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Container text style={{ marginBottom: '1em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}></Header>
                <Header as='h1' style={{ textAlign: 'center' }}>{getAtt('given_name')}, Welcome to Bottle O Li Zan Wine Shop</Header>
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
            <Container style={{ marginTop: '2em' }}>
                <Header as='h1' style={{ textAlign: 'center' }}>Customer Experience</Header>
                <Header as='h2'>Check what customer say about Bottle-O Li Zan Shop</Header>
                {EmbedExampleYouTube()}
            </Container>
            <BottomMenu />
        </div>
    );
}

export default withAuthenticator(App, { usernameAttributes: 'email', signUpConfig });

const styles = {
    marginLeft: '1em',
    marginRight: '1em'
}



//<Embed
//id='O6Xo21L0ybE'
//placeholder='https://react.semantic-ui.com/images/image-16by9.png'
//source='youtube'
///>