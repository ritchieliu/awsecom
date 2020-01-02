// This is the payment success  page

import React, {useState, useEffect, useContext} from 'react'
import { Grid } from 'semantic-ui-react'
import {Analytics} from 'aws-amplify';

import AppContext from '../context/AppContext'

import InitState from './InitState'
import CheckoutBanner from '../components/CheckoutBanner'
import CheckoutPayment from '../components/PaymentCenter'



function PaymentSuccess() {
    //RL add to get amount from father page
    //const { params } = props.match
    //console.log("params from Checkout.js is ", params) // this is totalPurchase from Checkout.js button click
    //var _totalPurchase = parseFloat(params).toFixed(2)
    //console.log("_product amount is : ",_totalPurchase)
    //
    //const [ordering, setOrdering] = useState(false)
    //const [card, setCard] = useState(0)
   // const [totalPurchase, setTotal] = useState(0)
    //const [orderComplete, setOrderComplete] = useState(false)

   // var {user, cart, items, clearCart} = useContext(AppContext)

    //const quantText = (cart.items.length === 1) ? '1 item' : cart.items.length + ' items'

    return (
        <div>
            <InitState/>
            <div style={mainDiv}>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column floated='left' width={11}>
                            Grid Column 1 Success
                        </Grid.Column>
                
                        <Grid.Column floated='right' width={5}>
                            Grid Column 2 Success
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
}

export default PaymentSuccess

const mainDiv = {
    marginLeft: '5em',
    marginRight: '1em',
    marginTop: '2em'
}