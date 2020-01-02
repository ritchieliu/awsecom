import fetch from 'isomorphic-unfetch';
import PropTypes from 'prop-types';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

//RL change
//import config from '../../config';
//

class PayButton extends React.Component {
    constructor(props) {
      super(props);
       // This binding is necessary to make `this` work in the callback
      this.onToken = this.onToken.bind(this);
    }
   
    async onToken(token) { // Token returned from Stripe   
      console.log('request onToken',token); // Logs for ease of debugging
      //var amount100 = this.props.amount
      console.log('charge.amount:this.props.amount', this.props.amount); // Logs for ease of debugging
      //console.log('charge.currency',charge.currency); // Logs for ease of debugging
      const res = await fetch('https://a34bpyzzrk.execute-api.us-east-2.amazonaws.com/dev/create-customer', { // Backend API url
        method: 'POST',
        body: JSON.stringify({
          token,
          amount: this.props.amount,
          currency: 'aud',
          customer: "Jason",
          email: 'Jason@hotmail.com',
        
        }),
      });
      
      console.log('res is ', res); // Logs for ease of debugging
      console.log('res.status is ', res.status); // Logs for ease of debugging
      console.log('res onToken',token); // Logs for ease of debugging
      //const data = await res.json();
      //console.log("data is:",data);
      //const token = token;
      //const amount = this.props.amount
      if (res.status == 200){
        console.log('200'); // 
        return (
          <StripeCheckout
            name="Bottle O Payment success"
            token={this.onToken}
            amount={this.props.amount}
            currency="USD"
            stripeKey="pk_test_bdx1V50LinipF1XD3i5RsZke005J7fA7eM" // Stripe publishable API key
            allowRememberMe={false}
          />
        );
      }
    }
  
    render() {
      return (
        <StripeCheckout
          name="Bottle O Payment success"
          token={this.onToken}
          amount={this.props.amount}
          currency="USD"
          stripeKey="pk_test_bdx1V50LinipF1XD3i5RsZke005J7fA7eM" // Stripe publishable API key
          allowRememberMe={false}
        />
      );
    }
  }
  
  PayButton.propTypes = {
    amount: PropTypes.number.isRequired,
  };
  
  export default PayButton;
