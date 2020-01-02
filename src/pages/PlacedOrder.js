// This the placed order page

import React, { useState, useContext } from 'react'
import { Button, Grid, Icon, Image, Header, Card, Divider, Dropdown, Segment} from 'semantic-ui-react'
import { Link } from 'aws-amplify-react'

//RL
import AppContext from '../context/AppContext'
import PlacedOrderBanner from '../components/PlacedOrderBanner'
import styled from 'styled-components'

function GoToHomePage()
{
    window.location = '/';   
}


function PlacedOrder(props) {
    //RL 
    const {user, total} = props
    function getAtt(name) {
        return user ? user[name] : ""
    }
    const {items, cart, addItemToCart} = useContext(AppContext)
    console.log("cart.items.length is:", cart.items.length)
    const quantText = (cart.items.length === 1) ? '1 item' : cart.items.length + ' items'
    const { params } = props.match
    
    console.log("params from Checkout.js is ", params) // this is totalPurchase from Checkout.js button click
    var _totalPurchase = parseFloat(params).toFixed(2)
    console.log("params from Checkout.js is ", _totalPurchase) 
    console.log("cart.items.id is ", cart.items.id) 

    function List() {
        // Build an array of items
        let array = [];
        console.log("cart items length is: ", cart.items.length)
        if (cart.items.length > 0) {
            
            for(let i = 0; i < cart.items.length; i++) {
                const itemname = cart.items[i].id
                
                const totalitems = cart.items.length
                const itemno = i
                //var itemidint = parseInt(cart.items[i].id)
                var _product = items.filter(function (el) {
                return el.id === parseInt(cart.items[i].id)
                })
                var product = ""
                if (_product.length === 1) product = _product[0]
            
                if (product) {
                    var features = product.info.map((item) => {
                        return <li key={item.length}>{item}</li>
                    })
                }

                    array.push(    
                        <Divider/>   
                    ); 
                    array.push(    
                        <Header as='h2'>{product.title}</Header>
                    ); 
                    array.push(    
                        <Image src={product.mainImage} />
                    );  
                    array.push(    
                        <PriceText>${product.price}</PriceText>
                    );  
                    array.push(    
                        <InfoText>
                        <ul>
                            {features}
                        </ul>
                        </InfoText>
                    ); 
                    array.push(         
                        <NormalText>Placed ItemID {itemno} of {totalitems} is:{itemname}</NormalText>
                    );
                    array.push(    
                        <Button color='dark blue' onClick={props.onOrder}>Remove Item</Button>
                    );
            }
        
            // Render it
            return (
            <div>
                {array}
            </div>
            );
        }
        //if (cart.items.length == 0) 
        else
        {   console.log("cart items length2 is ", cart.items.length)
            //let array = [];
            array.push(         
                <NormalText>Your Cart is Empty Now.</NormalText>
            );
            array.push(         
                <Button color='dark blue' size='10' floated='right'onClick={GoToHomePage}>Home</Button>
            );
        }
                    // Render it
                    return (
                        <div>
                            {array}
                        </div>
                        );
    }

    //
    return (
       <div>
           <Grid columns={3}>
                    <Grid.Row>
                        <Grid.Column width={1}>
                            <BoldText>1</BoldText>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <BoldText>Shipping address</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <NormalText>{getAtt('given_name') + ' ' + getAtt('family_name')}
                            <br/>{getAtt('custom:street')}<br/>{getAtt('custom:city')}, {getAtt('custom:state')} {getAtt('custom:postcode')}
                            <br/>{getAtt('custom:country')}
                            </NormalText>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>

                    <Grid.Row>
                        <Grid.Column width={1}>
                            <BoldText>2</BoldText>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <BoldText>Placed Items List</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7}>

                            <NormalText>Your Cart has {quantText}:</NormalText>
                            <NormalText>{List()}</NormalText>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>

                    <Grid.Row>
                        <Grid.Column width={1}>
                          
                        </Grid.Column>
                        <Grid.Column width={4}>
                            
                        </Grid.Column>
                        <Grid.Column width={7} verticalAlign='middle'>
                            <Grid columns={2}>
                               
                                <Grid.Column width={10}>
                                  
                                </Grid.Column>
                            </Grid>
                            <br/>
                            
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Segment>
                                <Grid columns={2}>
                                    <Grid.Column width={4}>
                                       
                                    </Grid.Column>
                                    <Grid.Column width={8} verticalAlign='middle'>
                                         <BoldText>Your Order is Comfirmed. Thank you purchase in Bottle O. Welcome Back.</BoldText>
                                         <BoldText>Your Order will be delived. Invoice is send to your email for your Reference.</BoldText>
                                        <TotalText>Order total: ${total}</TotalText>
                                    </Grid.Column>
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

       </div>

 
    )
}

export default PlacedOrder

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

const PriceText = styled.div`
    font-size: 14pt;
    color: #B12704;
`;

const InfoText = styled.div`
    font-size: 10pt;
`
const NormalText = styled.div`
  font-size: 1em;
`
const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
`
const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold
  color: #B12704;
`