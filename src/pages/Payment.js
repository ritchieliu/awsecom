// This is the payment page


import Layout from '../components/Layout';
import PayButton from '../components/PayButton';
import React from 'react';
//import PaymentCenter from '../components/PaymentCenter';

function Payment(props) {
    const { params } = props.match
    var totalPurchase = Object.values(params)
    console.log("params from Checkout.js is ", params) // this is totalPurchase from Checkout.js button click
    console.log("totalPurchase object value is ", totalPurchase*100) 

    return (
        <Layout>
          <h1>Bottle O Shop Checkout</h1>
          <p>Use test@email.com, 4242 4242 4242 4242, and any CVC and future expiration date.</p>
          <p>Your Total Purchase Amount : {totalPurchase}</p>
          <PayButton amount={totalPurchase*100} />         
        </Layout>    
    )

}

export default Payment
//<PayButton amount={200} />        
//<p>Total Amount is:{totalPurchase}</p>   error
//<PayButton amount={props.match} />         