import { Request, Response } from "express";
import Stripe from 'stripe'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY as string
const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export const handleCheckout = async (req: Request, res: Response) => {
  const { paymentMethod, amount } = req.body  
  try {
    const { id, card } = paymentMethod
    const payment = await stripe.paymentIntents.create({
      payment_method: id,
      amount,
      currency: 'usd',
      confirm: true,
      description: 'Pago de prueba top27'
    })

    return res.status(201).json({ message: 'success', payment })
  } catch (error) {
    return res.status(500).json(error)
    
  }
}
