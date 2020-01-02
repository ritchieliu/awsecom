//right hand side

import React from 'react'
import { Card, Button, Divider, Grid } from 'semantic-ui-react'
import styled from 'styled-components'
//mport { Link } from 'aws-amplify-react'
import { Link } from "react-router-dom";

//RL add




function CheckoutPayment(props) {
    const {total} = props

    
    //RL add
    //const quantText = (cart.items.length === 1) ? '1 item' : cart.items.length + ' items'

    return(
        <div>
            <Card fluid>
                <Card.Content>
                    <Button fluid color='orange' loading={props.placedOrder} onClick={props.onOrder}>Place your order here</Button>
                    <Divider/>
                    <BoldText>Order Summary</BoldText>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column floated='left' width={8}>
                                <SummaryText>Items:</SummaryText>
                                <SummaryText>Shipping & handling:</SummaryText>
                            </Grid.Column>
                            <Grid.Column floated='left' textAlign='right' width={1}>
                                <SummaryText>${total}</SummaryText>
                                <SummaryText>$0.00</SummaryText>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Divider/>
                    <Grid columns={3}>
                        <Grid.Row>
                            <Grid.Column floated='left' width={7}>
                                <TotalText>Order total:</TotalText>
                            </Grid.Column>
                            <Grid.Column floated='left' textAlign='right' width={1}>
                                <TotalText>${total}</TotalText>
                            </Grid.Column>
                            <Grid.Column>
                                <Link to={`/Payment/${total}`}>
                                    <Button fluid color='orange'>Payment</Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
              </Card>
        </div>
    )
}

export default CheckoutPayment

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 1em;
`

const SummaryText = styled.div`
  font-size: .9em;
  padding-right: 0em;
`

const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold
  color: #B12704;
`