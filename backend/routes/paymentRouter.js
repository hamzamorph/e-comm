import express from 'express';
import stripe from 'stripe';

const Stripe = new stripe('sk_test_51OYXhAHbRWlIg9sZPGukpnlORPtxOIZGGgH05IMwQ5s3mbV2hUpvWFs7tHoBFijm3QM8Oibndj9lVZ5ylpS6r7Z900Xeow9G92');

const paymentRouter = express.Router();

paymentRouter.post('/pay', async (req, res) => {
    const { amount } = req.body;
    const paymentItent = await Stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        automatic_payment_methods: {
            enabled: true
        }
    });

    res.send({
        clientSecret: paymentItent.client_secret
    });
});

export default paymentRouter;