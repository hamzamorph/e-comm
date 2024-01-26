/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js"
import CheckoutForm from './CheckoutForm'

const Stripe = ({ amount }) => {
    const[clientSecret, setClientSecret] = useState('')
    const total = amount * 100
    const { isLoggedIn } = useSelector(state => state.user)
    const navigate = useNavigate()
    const stripePromise = loadStripe('pk_test_51OYXhAHbRWlIg9sZGoUkYCgqO3HhWltfc3Escig40SY6EneGQHfk5bzl4dXqffh5lXISD5h28nBOejnflgjDpA3e00wdo9mrEb')

    useEffect(() => {
        if(!isLoggedIn) {
            navigate('/login')
        }else {
            const fetchClientSecret = async () => {
                try {
                    const response = await axios.post('http://localhost:3001/payments/pay', 
                    { 
                        amount: total
                    })
                    setClientSecret(response.data.clientSecret)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchClientSecret()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])

    return (
        <>
            {
                stripePromise && clientSecret && (
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                        <CheckoutForm />
                    </Elements>
                )
            }
        </>
    )
}

export default Stripe