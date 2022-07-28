import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux"
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa"
import { addToCart, deleteFromCart } from "../actions/cardAction"
import Chackout from '../components/Chackout'
import { Link } from 'react-router-dom'
//import { Chackout } from "../components/Chackout"

const CartScreen = () => {
    const userState = useSelector((state) => state.loginUserReducer)
    const { currentUser } = userState;
    const cartState = useSelector(state => state.cartReducer)
    const cartItems = cartState.cartItems;
    const dispatch = useDispatch()
    const subTotal = cartItems.reduce((x, items) => x + items.price, 0)
    const totalQnt = cartItems.reduce((x, items) => x + items.quantity, 0)
    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1>My Carts Items</h1>

                        <Row>
                            {
                                cartItems.map(items => {
                                    return (
                                        <>
                                            <Col md={7}>
                                                <h5>{items.name} [{items.varients}]</h5>
                                                <h6>Price : {items.quantity} x {items.prices[0][items.varients]} = {items.price}</h6>
                                                <h6>Quantity :&nbsp;
                                                    <FaMinusCircle
                                                        className='text-danger'
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => { dispatch(addToCart(items, items.quantity - 1, items.varients)) }}
                                                    />&nbsp;
                                                    {items.quantity}&nbsp;
                                                    <FaPlusCircle
                                                        className='text-success'
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() => { dispatch(addToCart(items, items.quantity + 1, items.varients)) }}

                                                    />

                                                </h6>
                                            </Col>
                                            <Col md={5}>
                                                <img
                                                    src={items.image}
                                                    alt={items.name}
                                                    style={{ height: '80px', width: "150px" }}
                                                />
                                                <FaTrash
                                                    className='text-danger'
                                                    style={{ cursor: "pointer", marginLeft: "30px" }}
                                                    onClick={() => { dispatch(deleteFromCart(items)) }}

                                                />
                                            </Col>
                                            <hr />
                                        </>)
                                })
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1>Payments Info</h1>
                        <h4>Varients : {cartItems.length} Types</h4>
                        <hr />
                        <h4>Quantity : {totalQnt} Items</h4>
                        <hr />
                        <h4>Sub Total : <span className='float-end'>{subTotal}/-</span></h4>

                        {
                            currentUser ? (<Chackout subTotal={subTotal} />) : (<Link to='/login' className='w-100 btn btn-outline-dark'>Pay Now</Link>)
                        }

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartScreen