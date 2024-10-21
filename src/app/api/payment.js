// pages/api/payment.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount } = req.body; // Amount in cents
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  }
}