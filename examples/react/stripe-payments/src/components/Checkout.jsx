import {CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement} from '@stripe/react-stripe-js';
import axios from 'axios'
import { useSelector } from 'react-redux';



const Checkout = () => {
  const cartItems = useSelector(state => state.cart.items);
  const totalPrice = cartItems.reduce((a, b) => a + b.totalPrice, 0).toFixed(2);
  const elements = useElements()
  const stripe = useStripe()


  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if(error) {
      console.log('Ups! ocurrió un error')
      return
    }

    const response  = await axios.post('http://localhost:8080/api/checkout',
      {
        paymentMethod,
        amount: totalPrice * 100
      })

    //console.log('Response Back:', response);
    elements.getElement(CardElement).clear()
  }

  return(
    <form onSubmit={handleSubmit}>
      <CardElement/>
      {/* <CardNumberElement/>
      <CardExpiryElement/> */}
      <button type='submit'>Pay</button>
    </form>
  )
}

export default Checkout