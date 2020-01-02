// This is function payment 

//const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')('sk_test_XxiQjENQho6pRNQuzYSxHVg600R9qod5jj');

module.exports.handler = (event, context, callback) => {
  console.log('createCharge');
  console.log(event);
 //const requestBody = JSON.parse(event.body);
  const requestBody = JSON.stringify(    
      {token: "value1",
       amount:"value2",
       currency:"USD"
      });
  //const token = requestBody.token.id;
  //const amount = requestBody.charge.amount;
  //const currency = requestBody.charge.currency;
  const token = requestBody.token;
  const amount = requestBody.amount;
  const currency = requestBody.currency;

  console.log(requestBody);

  return stripe.charges.create({ // Create Stripe charge with token
    amount,
    currency,
    description: 'Serverless Stripe Test charge',
    source: token,
  })
    .then((charge) => { // Success response
      console.log(charge);
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          message: `Charge processed succesfully!`,
          charge,
        }),
      };
      callback(null, response);
    })
    .catch((err) => { // Error response
      console.log(err);
      const response = {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          error: err.message,
        }),
      };
      callback(null, response);
    })
};












//exports.handler = async (event) => {
    // TODO implement
 //   const response = {
 //       statusCode: 200,
 //       body: JSON.stringify('Hello from Lambda!'),
 //   };
 //   return response;
//};
