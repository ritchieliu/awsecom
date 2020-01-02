//cart list

import React, {useContext, useState} from 'react'
import { Button, Grid, Icon, Image, Header, Card, Divider, Dropdown, Input, Segment} from 'semantic-ui-react'
import styled from 'styled-components'
    //RL add
    import AppContext from '../context/AppContext'
    import { Link } from "react-router-dom";
    
    
function GoToHomePage()
{
    window.location = '/';   
}




function CheckoutSummary(props) {
    const {user, total, } = props
    const {items, cart, addItemToCart,removeItemCart} = useContext(AppContext)
    //RL add item length works
    const [quantity, setQuantity] = useState(1)
    //var {cart} = useContext(AppContext)
    const quantText = (cart.items.length === 1) ? '1 item' : cart.items.length + ' items'
    //const itemName = (cart.items.itemName === "") ? '0 item' : cart.items.itemName
    //console.log("itemName is ", cart.items[0])
    //console.log("itemName2 is ", cart.items[0].id)
    //console.log("itemName3 is ", itemlist)
    //const itemname = cart.items[0].id
    
    

    function List() {
        // Build an array of items
        let array = [];
        console.log("cart items length is: ", cart.items.length)
        if (cart.items.length > 0) {
            function reply_click(clicked_id) {
                var itemnamevar = clicked_id;
                console.log(clicked_id);
               //alert(clicked_id);    
               //window.location.assign("/product_remove/"+itemnamevar); 
               
             }

            const handleClick = e => reply_click(e.target.id);
            const handleClickk = e => reply_click(e.target.key);
            
            for(let i = 0; i < cart.items.length; i++) {
                const itemname = cart.items[i].id
                const totalitems = cart.items.length
                const itemno = i
         
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
                        <Image src={product.mainImage}/>
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
                        <Button id={itemname} onClick={handleClick} color='dark blue'>Remove Item</Button>
                    );
                    array.push(
                        <Link id={itemname} to={`/Product_Remove/${itemname}`}><Button color='dark blue'>Remove Item (Confirm 2)</Button></Link>
                    );
            }
             //onClick={() => addItem(product, quantity)}
             // <Button color='dark blue' onClick={() => removeItemCart(product, quantity)}>Remove Item</Button>
             // array.push( 
              //    <li key={i} onClick={() => props.selectName(name)}> {name} </li>
             //   <Link id={itemname} to={'/Product_Remove/' + props.item.id><Button onClick={handleClick} color='dark blue'>Remove Item (Confirm)</Button></Link>
             //   );
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

      
    function getAtt(name) {
        return user ? user[name] : ""
    }



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
                            <BoldText>3</BoldText>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <BoldText>Payment method</BoldText>
                        </Grid.Column>
                        <Grid.Column width={7} verticalAlign='middle'>
                            <Grid columns={2}>
                                <Grid.Column width={2}><img src='/images/misc/amex.gif' alt=''/></Grid.Column>
                                <Grid.Column width={10}>
                                    <b>American Express</b>
                                </Grid.Column>
                            </Grid>
                            <br/>
                            <Input fluid icon='credit card' iconPosition='left' placeholder='Credit card...' onChange={(event, data)=>props.onCardUpdate(data)} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Segment>
                                <Grid columns={2}>
                                    <Grid.Column width={4}>
                                        <Button color='orange' loading={props.placedOrder} onClick={props.onOrder}>Place your order</Button>
                                    </Grid.Column>
                                    <Grid.Column width={8} verticalAlign='middle'>
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

export default CheckoutSummary

const BoldText = styled.div`
  font-size: 17px;
  font-weight: bold;
`
const NormalText = styled.div`
  font-size: 1em;
`
const TotalText = styled.div`
  font-size: 1.2em;
  font-weight: bold
  color: #B12704;
`

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


const InfoText = styled.div`
    font-size: 10pt;
`

const ButtonStyle = styled.div`
    padding-left: 2em;
`