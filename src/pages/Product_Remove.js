// This is the page display each product, alow user to add items in cart and wish list

import React, { useState, useContext } from 'react'
import { Button, Grid, Icon, Image, Header, Card, Divider, Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'
import { Analytics } from 'aws-amplify'

import AppContext from '../context/AppContext'

import InitState from './InitState'
import TopMenu from '../components/TopMenu'

//RL 
import { Link } from "react-router-dom";

function Product(props) {

    console.log("props.id is:",props.id)
    const [quantity, setQuantity] = useState(1)

    const {items, cart, addItemToCart, removeItemCart} = useContext(AppContext)

    const { params } = props.match

    var _product = items.filter(function (el) {
        return el.id === parseInt(params.id)
    })

    var product = ""
    if (_product.length === 1) product = _product[0]

    if (product) {
        var features = product.info.map((item) => {
            return <li key={item.length}>{item}</li>
        })
    }

    var quant = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
        return { key: item, value: item, text: item }
    })


    return (
        <div style={styles}>
            <InitState/>
            <TopMenu />
            <Grid columns={3} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={product.mainImage} />
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h2'>{product.title}</Header>
                        by Bottle O Li Zan
                    <Divider />
                        <Grid columns={3}>
                            <Grid.Column width={1} style={{ marginRight: '5px' }}>Price:</Grid.Column>
                            <Grid.Column width={2} textAlign='left'><PriceText>${product.price}</PriceText></Grid.Column>
                            <Grid.Column verticalAlign='bottom'><img src='/images/misc/prime.png' alt='prime' /></Grid.Column>
                        </Grid>
                        <StockText>In Stock.</StockText>
                        <BoldText>Want it delivered by tomorrow?</BoldText>
                        <InfoText>
                            <ul>
                                {features}
                            </ul>
                        </InfoText>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Card fluid>
                            <Card.Content>
                                <Link to={'/Checkout'}>
                                    <Button icon 
                                            labelPosition='left' 
                                            color='orange'  
                                            fluid
                                            onClick={() => removeItemCart(product, quantity)}>
                                        <Icon name='cart' />
                                        <ButtonStyle>Confirm Remove Item</ButtonStyle>
                                    </Button>
                                </Link>
                                <Divider />
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default Product

const styles = {
    marginLeft: '1em',
    marginRight: '1em',
    marginTop: '2em'
}

const PriceText = styled.div`
    font-size: 14pt;
    color: #B12704;
`;

const StockText = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    font-size: 14pt;
    color: #008a00;
`;

const BoldText = styled.div`
    font-size: 10pt;
    font-weight: bold;
    padding-bottom: 1em;
`

const InfoText = styled.div`
    font-size: 10pt;
`

const ButtonStyle = styled.div`
    padding-left: 2em;
`