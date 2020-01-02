import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//RL add
import PaymentSuccess from '../pages/PaymentSuccess'
//

//import config from '../../config';   //this is error //add a symlink to it from project's node_modules/

//RL add to get amount from father page
function PaymentCenter(props) {
      //const { params } = props.match //totalPuchase
      //console.log("params from Payment.js is ", params) // this is totalPurchase from Checkout.js button click
      var _totalPurchase = props.amount
      console.log("totalPurchase is : ", _totalPurchase)
//


    class PayButton extends React.Component {
      constructor(props) {
        super(props);
        this.onToken = this.onToken.bind(this);
      
      }



      async onToken(token) { // On a successful tokenization request,
        const res = await fetch("../../pages/PaymentSuccess.js", { // POST to our backend server with the token and charge details
          method: 'POST',
          body: JSON.stringify({
            token,
            charge: {
              amount: this.props.amount,
              currency: "usd",
            },
          }),
        });
        const data = await res.json();
        console.log('onToken');
        console.log(data);
      }

      render() {
        return (
          <StripeCheckout
            name="Serverless Bottle O"
            token={this.onToken}
            amount={this.props.amount}
            currency="usd"
            stripeKey="pk_test_bdx1V50LinipF1XD3i5RsZke005J7fA7eM" // Stripe publishable API Key
            allowRememberMe={false}
          />
        );
      }
    }

    PayButton.propTypes = {
      amount: PropTypes.number.isRequired,
    };
}

export default PaymentCenter