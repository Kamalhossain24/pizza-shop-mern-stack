import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from "react-redux"
import { placeOrder } from '../actions/orderActions';
import Loader from "./Loader";
import Error from "./Error";
import Sucess from "./Sucess";
import { useHistory } from 'react-router-dom';
const Chackout = ({ subTotal }) => {
    const history = useHistory()
    const orderState = useSelector((state) => state.placeOrderReducer);
    const { loading, error, success } = orderState;
    const dispatch = useDispatch();
    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal))
        console.log(token);
    }
    return (
        <>
            {loading && <Loader />}
            {error && <Error error="something went wrong" />}
            {success && <Sucess success="order placed success" />}
            {success && alert("Paymenst Succesfull", history.push("/orders"))}
            <StripeCheckout
                amount={subTotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey="pk_test_51LMqX0SFkPIyxL3r4LPimayt3u2Ms1Az9gOsae8XuZQPgWnhmZNwakQf98oA3hVWeGFewjAuS4AqloBj9OfpDGNS00CVrTP9jN"
                currency='INR'

            >
                <button className='w-100 btn btn-outline-dark'>Pay Now</button>
            </StripeCheckout>
        </>
    )
}

export default Chackout