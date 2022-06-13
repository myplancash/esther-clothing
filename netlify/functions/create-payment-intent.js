require('dotenv').config();
console.log(process.env);

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
// stripe.plans.retrieve('test').then(console.log, console.error);


exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };

  } catch (error) {
    console.log({ error });

    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
};